"use client";

import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Header from "../signup/components/header/header";
import AuthForm from "@/app/components/auth_form/auth_form";
import LinkHolder from "../signup/components/link_holder/link_holder";

export default function Content() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [hideMainContent, setHideMainContent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setDisableBtn(true);

    if (!email) {
      setError("Please enter email.");
      setDisableBtn(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/reset_password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      if (response.status !== 200) {
        const data = await response.json();
        setError(data.error);
        setDisableBtn(false);
        return;
      }

      setEmail("");
      setHideMainContent(true);
    } catch (error) {
      console.error(error);
      setError("An error occured. Try again after sometime.");
    } finally {
      setDisableBtn(false);
    }
  };

  return (
    <div className="w-[352px] max-w-[352px] flex flex-col items-center justify-center">
      {hideMainContent ? (
        <MessageContent />
      ) : (
        <FormContent
          email={email}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
          error={error}
          setError={setError}
          disableBtn={disableBtn}
        />
      )}
    </div>
  );
}

function FormContent(props) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <Header title={"Forgot Password"} />
      <AuthForm {...props} btnTitle="Reset Password" />
      <LinkHolder linkText={"or"} linkTo={"/signin"} linkTitle={"Sign in"} />
    </div>
  );
}

const text2 = `You should soon receive an email allowing you to reset your password. Please make sure to check your spam and trash if you can't find the email.`;

function MessageContent() {
  return (
    <div className="w-full px-4 py-5 flex flex-row items-start justify-center gap-4 bg-[#acd2cc] rounded-lg">
      <div>
        <CheckCircleIcon />
      </div>
      <div flex flex-col items-center justify-start gap-3>
        <p className="font-semibold">Reset password email sent</p>
        <p className="text-[13px]">{text2}</p>
      </div>
    </div>
  );
}

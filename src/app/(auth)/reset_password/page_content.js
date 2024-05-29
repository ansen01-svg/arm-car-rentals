"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Error from "@/app/(rest)/checkout/components/error/error";
import Header from "../signup/components/header/header";
import AuthForm from "@/app/components/auth_form/auth_form";
import LinkHolder from "../signup/components/link_holder/link_holder";

const errorMsg1 = "Page not found.";
const errorMsg2 =
  "We apologize, but we cannot find the page you’re looking for.";
const errorMsg3 = "home page.";

export default function Content({ token }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const router = useRouter();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setDisableBtn(true);

    if (!password || !confirmPassword) {
      setError("Please fill up all the fields.");
      setDisableBtn(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Password does not match.");
      setDisableBtn(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/confirm_password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
            token,
          }),
        }
      );

      if (response.status !== 201) {
        const data = await response.json();
        setError(data.error);
        setDisableBtn(false);
        return;
      }

      setPassword("");
      setConfirmPassword("");
      router.push("/signin");
    } catch (error) {
      console.error(error);
      setError("An error ocurred, try again after sometime.");
    } finally {
      setDisableBtn(false);
    }
  };

  if (!token) {
    return (
      <div className="w-full px-3 py-3 flex flex-col items-center justify-center gap-5 md:flex-row-reverse md:items-start lg:px-20 lg:py-6">
        <Error
          errorMsg1={errorMsg1}
          errorMsg2={errorMsg2}
          errorMsg3={errorMsg3}
          link={"/"}
          linkTitle={"Go to"}
        />
      </div>
    );
  }

  return (
    <div className="w-[352px] max-w-[352px] h-full flex flex-col items-center justify-center gap-4">
      <Header title={"Reset Password"} />
      <AuthForm
        password={password}
        confirmPassword={confirmPassword}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
        disableBtn={disableBtn}
        btnTitle="Submit"
      />
      <LinkHolder linkText={`or`} linkTo={"/signin"} linkTitle={"Sign in"} />
    </div>
  );
}

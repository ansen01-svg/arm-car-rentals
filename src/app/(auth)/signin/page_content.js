"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/header/header";
import AuthForm from "@/app/components/auth_form/auth_form";
import LinkHolder from "./components/link_holder/link_holder";

export default function Content() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [callbackUrl, setCallbackUrl] = useState("");

  const router = useRouter();

  useEffect(() => {
    const currentUrl = window.location.href;

    if (currentUrl.includes("/car")) {
      setCallbackUrl(currentUrl.split("callbackUrl=")[1]);
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    if (!email || !password) {
      setError("Please fill up all the fields.");
      setDisableBtn(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (response.status === 200) {
        if (callbackUrl) {
          router.push(callbackUrl);
          router.refresh();
        } else {
          router.push("/");
          router.refresh();
        }
        setError("");
        setEmail("");
        setPassword("");
        setDisableBtn(false);
      } else {
        const data = await response.json();
        setError(data.error);
        setDisableBtn(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[352px] max-w-[352px] h-full flex flex-col items-center justify-center gap-4">
      <Header />
      <AuthForm
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
        disableBtn={disableBtn}
        btnTitle="Sign in"
      />
      <LinkHolder />
    </div>
  );
}

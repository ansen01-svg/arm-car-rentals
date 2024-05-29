"use client";

import Link from "next/link";
import { useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import Body from "./components/body/body";
import Error from "@/app/(rest)/checkout/components/error/error";

const failedTitle1 = `Email verification failed.`;
const failedTitle2 = `Looks like the verification link has expired. We can send the link again.`;

const successTitle1 = `Your email has been successfully verified.
`;
const successTitle2 = `Make your first booking by visiting the home page.
`;

const errorMsg1 = "Page not found.";
const errorMsg2 =
  "We apologize, but we cannot find the page you’re looking for.";
const errorMsg3 = "home page.";

export default function Content(props) {
  const { data, token } = props;

  const [disableBtn, setDisableBtn] = useState(false);

  // resend email verification link
  const resendLink = () => {
    setDisableBtn(true);

    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/resend_email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((response) => {
        if (response.status === 200) {
          enqueueSnackbar("Email sent", { variant: "success" });
        }
      })
      .catch((error) => console.error(error));

    setDisableBtn(false);
  };

  if (!token || data.msg === "unknown eror" || data.msg === "network error") {
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

  if (data.msg === "error") {
    return (
      <div className="w-full px-3 lg:px-20">
        <SnackbarProvider
          autoHideDuration={3000}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        />
        <Body
          title1={failedTitle1}
          title2={failedTitle2}
          buttonTitle={"Resend verification link"}
          disabled={disableBtn}
          handleClick={resendLink}
        />
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <p className="text-[15px] text-center text-primary lg:text-[15px]">
            Or
          </p>
          <Link
            href={"/"}
            className="px-5 py-[8px] bg-secondary text-white rounded-lg"
          >
            Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-3 lg:px-20">
      <Body
        title1={successTitle1}
        title2={successTitle2}
        linkTo={"/"}
        linkTitle={"Home"}
      />
    </div>
  );
}

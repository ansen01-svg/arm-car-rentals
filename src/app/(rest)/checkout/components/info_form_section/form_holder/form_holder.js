"use client";

import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Form from "./form/form";

export default function FormHolder({ tripId }) {
  const [driver, setDriver] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const router = useRouter();

  // get current user
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user/getCurrentUser`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setDriver(data.data.username);
          setBookingEmail(data.data.email);
          setPhoneNumber(data.data.phoneNumber ? data.data.phoneNumber : "");
        } else {
          setUser(null);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    const body = {
      tripId,
      phoneNumber,
      driver,
      contactEmail: bookingEmail,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/trips/update_trip`,
        {
          method: "POST",
          headers: { "Content-Type": "application-json" },
          body: JSON.stringify(body),
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        router.push(`/bookingConfirmation?tripId=${data.data}`);
        setDisableBtn(false);
      } else {
        setDisableBtn(false);
      }
    } catch (error) {
      console.log(error);
      setDisableBtn(false);
    }
  };

  return (
    <div className="w-full">
      <Form
        driver={driver}
        phoneNumber={phoneNumber}
        bookingEmail={bookingEmail}
        setDriver={setDriver}
        setPhoneNumber={setPhoneNumber}
        setBookingEmail={setBookingEmail}
        handleSubmit={handleSubmit}
        disableBtn={disableBtn}
      />
    </div>
  );
}

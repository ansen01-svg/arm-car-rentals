"use client";

import { useState, useEffect } from "react";
import Loading from "@/app/(admin)/fleet/[id]/components/main/loading/loading";
import NotFound from "@/app/(admin)/fleet/[id]/components/main/not_found/not_found";
import TitleAndImageHolder from "@/app/(admin)/fleet/[id]/components/main/title_and_image_holder/title_and_image_holder";
import FormHolder from "./form_holder/form_holder";

const src =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XV_sJEjoSZ_2KihAsSYHwgHaFP%26pid%3DApi&f=1&ipt=68f1304924a2dd43cb5d299654056c7d29fd8679520e74e87fe68289df4a3223&ipo=images";

export default function Main(props) {
  const { id } = props;

  const [oneBooking, setOneBooking] = useState(null);

  // fetch booking initially
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/booking/getSingleBookingAdmin?bookingId=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setOneBooking(data.data);
        } else {
          setOneBooking([]);
        }
      })
      .catch((error) => console.log(error));

    return () => setOneBooking(null);
  }, [id]);

  if (!oneBooking) {
    return <Loading />;
  }

  if (oneBooking && !oneBooking.length) {
    return <NotFound />;
  }

  return (
    <div className="w-full px-6 py-4 flex items-start justify-center lg:px-0">
      <TitleAndImageHolder
        title={`ITN- ${oneBooking[0].itineraryNumber}`}
        src={src}
      />
      <FormHolder booking={oneBooking} />
    </div>
  );
}

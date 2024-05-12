"use client";

import { useState, useEffect } from "react";
import Loading from "./loading/loading";
import NotFound from "./not_found/not_found";
import TitleAndImageHolder from "./title_and_image_holder/title_and_image_holder";
import FormHolder from "./form_holder/form_holder";

export default function Main(props) {
  const { id } = props;

  const [oneUser, setOneUser] = useState(null);

  // fetch car initially
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/user/getSingleUser?userId=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setOneUser(data.data);
        } else {
          setOneUser([]);
        }
      })
      .catch((error) => console.log(error));

    return () => setOneUser(null);
  }, [id]);

  if (!oneUser) {
    return <Loading />;
  }

  if (oneUser && !oneUser.length) {
    return <NotFound />;
  }

  return (
    <div className="w-full px-6 py-4 flex items-start justify-center lg:px-0">
      <TitleAndImageHolder user={oneUser} />
      <FormHolder user={oneUser} />
    </div>
  );
}

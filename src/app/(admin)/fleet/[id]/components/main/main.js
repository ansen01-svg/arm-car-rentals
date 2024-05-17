"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "./loading/loading";
import NotFound from "./not_found/not_found";
import TitleAndImageHolder from "./title_and_image_holder/title_and_image_holder";
import FormHolder from "./form_holder/form_holder";
import DialogBox from "./dialog/dialog";
import { enqueueSnackbar } from "notistack";
import revalidateAction from "@/app/actions/revalidate";

export default function Main(props) {
  const { id } = props;

  const [oneCar, setOneCar] = useState(null);
  const [open, setOpen] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  const router = useRouter();

  // fetch car initially
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/cars/getSingleCar?carId=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setOneCar(data.data);
        } else {
          setOneCar([]);
        }
      })
      .catch((error) => console.log(error));

    return () => setOneCar(null);
  }, [id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // delete row
  const deleteRow = async () => {
    setDisableBtn(true);
    handleClose();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/cars/removeCar`,
        {
          method: "POST",
          headers: { "Content-Type": "application/josn" },
          body: JSON.stringify({ carId: oneCar[0]._id }),
        }
      );

      if (response.status !== 200) {
        const data = await response.json();
        console.log(data);
        setDisableBtn(false);
        return;
      }

      const data = await response.json();
      console.log(data);
      setDisableBtn(false);
      enqueueSnackbar("Row deleted", { variant: "success" });
      router.push("/fleet");
      revalidateAction("/fleet");
      revalidateAction("/cars");
    } catch (error) {
      console.log(error);
      setDisableBtn(false);
    }
  };

  if (!oneCar) {
    return <Loading />;
  }

  if (oneCar && !oneCar.length) {
    return <NotFound />;
  }

  return (
    <div className="w-full px-6 py-4 flex items-start justify-center lg:px-0">
      <TitleAndImageHolder title={oneCar[0].model} src={oneCar[0].image} />
      <FormHolder car={oneCar} handleClickOpen={handleClickOpen} />
      <DialogBox
        open={open}
        handleClose={handleClose}
        deleteRow={deleteRow}
        disableBtn={disableBtn}
      />
    </div>
  );
}

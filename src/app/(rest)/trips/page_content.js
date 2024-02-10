"use client";

import "./styles.css";
import { useEffect, useState } from "react";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";
import EmptyTrips from "./components/empty_trips/empty_trips";
import Header from "./components/header/header";
import TripsHolder from "./components/trips_holder/trips_holder";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const btnTitle1 = `Yes, cancel now`;
const btnTitle2 = `No, don't cancel`;

export default function Trips() {
  const [trips, setTrips] = useState(null);
  const [open, setOpen] = useState(false);
  const [cancelId, setCancelId] = useState(null);

  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // fetch trips
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/trips/get_all_trips`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setTrips(data.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  // cancel booking
  const cancelBooking = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/trips/cancel_trip`,
        {
          method: "POST",
          headers: { "Content-Type": "application-json" },
          body: JSON.stringify({ tripId: cancelId, tripStatus: "cancelled" }),
        }
      );

      if (response.status === 201) {
        // revalidatePath("/trips");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }

    handleClose();
  };

  const keepBooking = () => {
    handleClose();
  };

  const mobileScreen = useMediaQuery("(max-width:1024px)");

  if (trips !== null && trips.length < 1) {
    return <EmptyTrips />;
  }

  return (
    <div className="w-full min-h-[355px] flex flex-col items-center justify-start md:py-12">
      {!mobileScreen && <Header />}
      <TripsHolder
        trips={trips}
        setCancelId={setCancelId}
        handleClickOpen={handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-cancel-reservation"
        aria-describedby="alert-cancel-reservation"
        sx={{
          ".MuiPaper-root": {
            maxWidth: "500px",
          },
          ".MuiTypography-root": {
            fontSize: "15px",
            fontFamily: "__Inter_aaf875, __Inter_Fallback_aaf875",
            color: "#000",
          },
          ".MuiDialogActions-root": {
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            "& :not(style)": {
              marginLeft: 0,
            },
          },
        }}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to cancel your reservation?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className="button1" onClick={cancelBooking}>
            {btnTitle1}
          </button>
          <button className="button2" onClick={keepBooking}>
            {btnTitle2}
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

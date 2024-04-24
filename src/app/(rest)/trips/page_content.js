"use client";

import "./styles.css";
import { useState } from "react";
import Error from "./components/error/error";
import Header from "./components/header/header";
import TripsHolder from "./components/trips_holder/trips_holder";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const btnTitle1 = `Yes, cancel now`;
const btnTitle2 = `No, don't cancel`;

export default function Trips({ trips }) {
  const [open, setOpen] = useState(false);
  const [cancelId, setCancelId] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // cancel booking
  const cancelBooking = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/booking/updateStatus`,
        {
          method: "POST",
          headers: { "Content-Type": "application-json" },
          body: JSON.stringify({ tripId: cancelId, tripStatus: "cancelled" }),
        }
      );

      if (response.status === 201) {
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

  if (!trips) {
    return <Error />;
  }

  return (
    <div className="w-full min-h-[355px] flex flex-col items-center justify-center md:py-12">
      <Header />
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

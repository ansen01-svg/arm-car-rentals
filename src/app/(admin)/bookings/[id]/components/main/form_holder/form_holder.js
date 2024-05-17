import { useRouter } from "next/navigation";
import { useState } from "react";
import { EditButton, SaveButton } from "../buttons";
import UneditableTextField from "@/app/(admin)/fleet/[id]/components/main/form_holder/uneditable_text_field_holder";
import EditableTextField from "@/app/(admin)/fleet/[id]/components/main/form_holder/editable_text_field_holder";
import EditableSelectField from "@/app/(admin)/fleet/[id]/components/main/form_holder/editable_select_field_holder";
import { enqueueSnackbar } from "notistack";
import revalidateAction from "@/app/actions/revalidate";

export default function FormHolder({ booking }) {
  const router = useRouter();
  const oneBooking = booking[0];

  const [disableBtn, setDisableBtn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [bookingProps, setBookingProps] = useState({
    status: oneBooking.status,
    paymentStatus: oneBooking.paymentStatus,
    liscenceNumber: oneBooking.liscenceNumber || "",
    paymentMethod: oneBooking.paymentMethod || "Cash",
  });

  // edit button click
  const handleEditButton = () => {
    setIsEditing(true);
  };

  // save button click
  const handleSaveButton = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    // initialize POST body
    const body = { tripId: oneBooking._id };

    // if liscence number is updated
    if (bookingProps.liscenceNumber.length > 0) {
      body.liscenceNumber = bookingProps.liscenceNumber;
    }

    // if status is updated
    if (oneBooking.status !== bookingProps.status) {
      body.status = oneBooking.status;
    }

    // if payment status is updated
    if (oneBooking.paymentStatus !== bookingProps.paymentStatus) {
      body.paymentStatus = bookingProps.paymentStatus;
      body.paymentMethod = bookingProps.paymentMethod;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/booking/updateBookingAndPaymentStatus`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.status !== 201) {
        const data = await response.json();
        console.log(data);
        setIsEditing(false);
        setDisableBtn(false);
        return;
      }

      setIsEditing(false);
      setDisableBtn(false);
      enqueueSnackbar("Row saved", { variant: "success" });
      router.push("/bookings");
      revalidateAction("/bookings");
      revalidateAction("/trips");
    } catch (error) {
      console.log(error);
      setIsEditing(false);
      setDisableBtn(false);
    }
  };

  // handle input change
  const handleChange = (e) => {
    setBookingProps({ ...bookingProps, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[50%] flex flex-col items-center justify-start gap-10">
      <form className="w-full flex flex-col items-center justify-start gap-10">
        <div className="w-full flex items-center justify-end">
          {isEditing ? (
            <SaveButton disabled={disableBtn} handleClick={handleSaveButton} />
          ) : (
            <EditButton
              title="Edit"
              handleClick={handleEditButton}
              disabled={oneBooking.status !== "Booked"}
            />
          )}
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <UneditableTextField
            labelTitle="Trip start"
            labelFor="tripStart"
            defaultValue={oneBooking.tripStartDate}
          />
          <UneditableTextField
            labelTitle="Trip end"
            labelFor="tripEnd"
            defaultValue={oneBooking.tripEndDate}
          />
          <UneditableTextField
            labelTitle="Vehicle number"
            labelFor="vehicleNumber"
            defaultValue={oneBooking.vehicleNumber}
          />
          <UneditableTextField
            labelTitle="User Id"
            labelFor="userId"
            defaultValue={oneBooking.userId}
          />
          <UneditableTextField
            labelTitle="Email"
            labelFor="email"
            defaultValue={oneBooking.email}
          />
          <UneditableTextField
            labelTitle="Driver"
            labelFor="driver"
            defaultValue={oneBooking.driver}
          />
          <UneditableTextField
            labelTitle="Phone number"
            labelFor="phoneNumber"
            defaultValue={oneBooking.phoneNumber}
          />
          <UneditableTextField
            labelTitle="Total"
            labelFor="total"
            defaultValue={oneBooking.total}
          />
          <EditableTextField
            labelTitle="Liscence number"
            labelFor="liscenceNumber"
            value={bookingProps.liscenceNumber}
            handleChange={handleChange}
            isEditing={isEditing}
          />
          <EditableSelectField
            labelTitle="Status"
            labelFor="status"
            value={bookingProps.status}
            selectValue={
              bookingProps.status === "Booked" ? "Completed" : "Booked"
            }
            handleChange={handleChange}
            isEditing={isEditing}
          />
          <EditableSelectField
            labelTitle="Payment status"
            labelFor="paymentStatus"
            value={bookingProps.paymentStatus}
            selectValue={
              bookingProps.paymentStatus === "Pending" ? "Completed" : "Pending"
            }
            handleChange={handleChange}
            isEditing={isEditing}
          />
          <EditableSelectField
            labelTitle="Payment method"
            labelFor="paymentMethod"
            value={bookingProps.paymentMethod}
            selectValue={
              bookingProps.paymentMethod === "Cash" ? "Online" : "Cash"
            }
            handleChange={handleChange}
            isEditing={isEditing}
          />
        </div>
      </form>
    </div>
  );
}

import { useRouter } from "next/navigation";
import { useState } from "react";
import { EditButton, SaveButton } from "../buttons";
import UneditableTextField from "./uneditable_text_field_holder";
import EditableTextField from "./editable_text_field_holder";
import UneditableSelectField from "./uneditable_select_field_holder";
import EditableSelectField from "./editable_select_field_holder";
import { enqueueSnackbar } from "notistack";
import revalidateAction from "@/app/actions/revalidate";

export default function FormHolder(props) {
  const { car, handleClickOpen } = props;

  const router = useRouter();
  const oneCar = car[0];

  const [disableBtn, setDisableBtn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [carProps, setCarProps] = useState({
    rate: oneCar.rate,
    status: oneCar.status,
    availabilityStatus: oneCar.availabilityStatus,
  });

  // edit button click
  const handleEditButton = () => {
    setIsEditing(true);
  };

  // save button click
  const handleSaveButton = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    const { rate, status, availabilityStatus } = carProps;
    const body = { carId: oneCar._id };

    if (oneCar.rate !== parseInt(rate)) {
      body.rate = rate;
    }

    if (oneCar.status !== status) {
      body.status = status;
    }

    if (oneCar.availabilityStatus !== availabilityStatus) {
      body.availabilityStatus = availabilityStatus;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/cars/editCar`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.status !== 201) {
        const data = await response.json();
        console.log("Error:", data);
        setIsEditing(false);
        return;
      }

      enqueueSnackbar("Row saved", { variant: "success" });
      router.push("/fleet");
      await revalidateAction("/fleet");
      await revalidateAction("/cars");
    } catch (error) {
      console.error("Request failed:", error);
    } finally {
      setIsEditing(false);
      setDisableBtn(false);
    }
  };

  // handle input change
  const handleChange = (e) => {
    setCarProps({ ...carProps, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[50%] flex flex-col items-center justify-start gap-10">
      <form className="w-full flex flex-col items-center justify-start gap-10">
        <div className="w-full flex items-center justify-end">
          {isEditing ? (
            <SaveButton disabled={disableBtn} handleClick={handleSaveButton} />
          ) : (
            <EditButton title="Edit" handleClick={handleEditButton} />
          )}
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <UneditableTextField
            labelTitle="Model"
            labelFor="model"
            defaultValue={oneCar.model}
          />
          <UneditableTextField
            labelTitle="Color"
            labelFor="color"
            defaultValue={oneCar.color}
          />
          <UneditableSelectField
            labelTitle="Type"
            labelFor="type"
            defaultValue={oneCar.type}
          />
          <UneditableSelectField
            labelTitle="Specification"
            labelFor="specification"
            defaultValue={oneCar.specification}
          />
          <UneditableTextField
            labelTitle="Number plate"
            labelFor="numberPlate"
            defaultValue={oneCar.numberPlate}
          />
          <UneditableTextField
            labelTitle="Capacity"
            labelFor="capacity"
            defaultValue={oneCar.capacity}
          />
          <UneditableSelectField
            labelTitle="Fuel type"
            labelFor="fuelType"
            defaultValue={oneCar.fuelType}
          />
          <EditableTextField
            labelTitle="Rate"
            labelFor="rate"
            value={carProps.rate}
            handleChange={handleChange}
            isEditing={isEditing}
          />
          <EditableSelectField
            labelTitle="Availability status"
            labelFor="availabilityStatus"
            value={carProps.availabilityStatus}
            selectValue={
              carProps.availabilityStatus === "Available"
                ? "Not available"
                : "Available"
            }
            handleChange={handleChange}
            isEditing={isEditing}
          />
          <EditableSelectField
            labelTitle="Status"
            labelFor="status"
            value={carProps.status}
            selectValue={
              carProps.status === "Checked in" ? "Checked out" : "Checked in"
            }
            handleChange={handleChange}
            isEditing={isEditing}
          />
        </div>
      </form>
      <div className="w-full flex items-center justify-end">
        <EditButton title="Delete row" handleClick={handleClickOpen} />
      </div>
    </div>
  );
}

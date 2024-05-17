import { useRouter } from "next/navigation";
import { useState } from "react";
import { EditButton, SaveButton } from "../buttons";
import UneditableSelectField from "@/app/(admin)/fleet/[id]/components/main/form_holder/uneditable_select_field_holder";
import EditableSelectField from "@/app/(admin)/fleet/[id]/components/main/form_holder/editable_select_field_holder";
import UneditableTextField from "@/app/(admin)/fleet/[id]/components/main/form_holder/uneditable_text_field_holder";
import { enqueueSnackbar } from "notistack";
import revalidateAction from "@/app/actions/revalidate";

export default function FormHolder({ user }) {
  const [disableBtn, setDisableBtn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userProps, setUserProps] = useState({
    role: user[0].role,
  });

  const router = useRouter();

  // edit button click
  const handleEditButton = () => {
    setIsEditing(true);
  };

  // save button click
  const handleSaveButton = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    // check if values are same
    if (userProps.role === user[0].role) {
      setIsEditing(false);
      setDisableBtn(false);
      return;
    }

    const body = {
      userId: user[0]._id,
      role: userProps.role,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/user/updateUser`,
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
      router.push("/users");
      revalidateAction("/users");
    } catch (error) {
      console.log(error);
      setIsEditing(false);
      setDisableBtn(false);
    }
  };

  // handle input change
  const handleChange = (e) => {
    setUserProps({ ...userProps, [e.target.name]: e.target.value });
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
            labelTitle="Username"
            labelFor="username"
            defaultValue={user[0].username}
          />
          <UneditableTextField
            labelTitle="Email"
            labelFor="email"
            defaultValue={user[0].email}
          />
          <UneditableSelectField
            labelTitle="Is verified"
            labelFor="isVerified"
            defaultValue={user[0].isVerified.toString()}
          />
          <UneditableTextField
            labelTitle="Trips"
            labelFor="trips"
            defaultValue={user[0].myTrips.length}
          />
          <EditableSelectField
            labelTitle="Role"
            labelFor="role"
            value={userProps.role}
            selectValue={userProps.role === "User" ? "Admin" : "User"}
            handleChange={handleChange}
            isEditing={isEditing}
          />
        </div>
      </form>
    </div>
  );
}

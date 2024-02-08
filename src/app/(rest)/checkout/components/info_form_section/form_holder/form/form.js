import UserInfo from "./user_info";
import ConfirmEmail from "./confirm_email";
import ImportantInfo from "./important_info";
import ButtonHolder from "./button_holder";

export default function Form(props) {
  const { handleSubmit, bookingEmail, setBookingEmail, disableBtn } = props;

  return (
    <form
      className="w-full flex flex-col items-center justify-center gap-3"
      onSubmit={handleSubmit}
    >
      <UserInfo {...props} />
      <ConfirmEmail
        bookingEmail={bookingEmail}
        setBookingEmail={setBookingEmail}
      />
      <ImportantInfo />
      <ButtonHolder disableBtn={disableBtn} />
    </form>
  );
}

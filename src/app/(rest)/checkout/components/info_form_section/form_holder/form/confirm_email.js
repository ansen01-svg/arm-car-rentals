import FieldHolder from "./field_holder";
import { Header } from "./user_info";

const headerTitle = "Confirmation email";
const text =
  "Please enter the email address where you would like to receive your confirmation.";

export default function ConfirmEmail(props) {
  const { bookingEmail, setBookingEmail } = props;

  return (
    <div className="w-full px-3 py-5 bg-white rounded-2xl border-[1px] border-slate-200 flex flex-col items-start justify-center gap-4 shadow">
      <Header headerTitle={headerTitle} />
      <p className="text-[14px] text-gray1">{text}</p>
      <FieldHolder
        labelTitle="Email"
        labeFor="email"
        value={bookingEmail}
        type={"email"}
        placeholder={"Your email address"}
        handleChange={setBookingEmail}
      />
    </div>
  );
}

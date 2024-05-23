import FieldHolder from "./field_holder";

export default function UserInfo(props) {
  const { driver, phoneNumber, setDriver, setPhoneNumber } = props;

  const headerTitle = `Who's driving?`;

  return (
    <div className="w-full px-3 py-5 bg-white rounded-2xl border-[1px] border-slate-200 flex flex-col items-center justify-center gap-5 shadow">
      <Header headerTitle={headerTitle} />
      <div className="w-full flex flex-col items-start justify-center gap-4">
        <FieldHolder
          labelTitle="Name"
          labeFor="name"
          value={driver}
          type={"text"}
          placeholder={"Driver's name"}
          handleChange={setDriver}
        />
        <FieldHolder
          labelTitle="Phone number"
          labeFor="phone-number"
          value={phoneNumber}
          type={"number"}
          placeholder={"In case we need to reach you"}
          handleChange={setPhoneNumber}
        />
      </div>
    </div>
  );
}

export function Header({ headerTitle }) {
  return (
    <div className="w-full text-left text-[20px] text-primary font-semibold">
      {headerTitle}
    </div>
  );
}

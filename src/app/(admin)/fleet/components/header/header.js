import CreateNewButton from "./addnew_button";

export default function Header() {
  return (
    <div className="w-full px-6 py-4 flex items-center justify-between lg:px-0">
      <div>
        <h1 className="text-[20px] text-primary font-medium">Manage Fleet</h1>
      </div>
      <div>
        <CreateNewButton />
      </div>
    </div>
  );
}

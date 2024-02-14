const headerText = "Thank you! Your trip is booked.";

export default function Header() {
  return (
    <div className="w-full text-left">
      <h1 className="text-[24px] text-secondary font-bold">{headerText}</h1>
    </div>
  );
}

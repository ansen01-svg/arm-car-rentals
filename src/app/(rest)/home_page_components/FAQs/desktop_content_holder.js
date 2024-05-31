export default function DesktopContent({ title, text }) {
  return (
    <div className="w-full px-6 py-5 flex flex-col items-start justify-center gap-3">
      <h2 className="font-semibold text-[18px] text-primary">{title}</h2>
      <p className="text-[15px] text-gray1">{text}</p>
    </div>
  );
}

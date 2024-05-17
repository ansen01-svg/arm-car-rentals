export default function Header({ title }) {
  return (
    <div className="w-full px-6 py-4 flex items-center justify-between lg:px-0">
      <div>
        <h1 className="text-[20px] text-primary font-medium">{title}</h1>
      </div>
    </div>
  );
}

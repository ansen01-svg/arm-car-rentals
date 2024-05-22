export default function Header({ title }) {
  return (
    <div className="w-full h-12 text-primary flex flex-row items-center justify-start">
      <p className="font-bold">{title}</p>
    </div>
  );
}

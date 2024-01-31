export default function InfoText({ title, serialNumber }) {
  return (
    <div className="flex gap-3">
      <h1 className="text-xl font-bold md:text-4xl">{serialNumber}</h1>
      <h1 className="text-xl font-bold md:text-4xl">{title}</h1>
    </div>
  );
}

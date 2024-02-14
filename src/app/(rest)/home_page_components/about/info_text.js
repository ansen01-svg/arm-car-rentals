export default function InfoText({ title, serialNumber }) {
  return (
    <div className="text-xl font-bold md:text-4xl text-primary flex gap-3">
      <h1>{serialNumber}</h1>
      <h1>{title}</h1>
    </div>
  );
}

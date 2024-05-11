export default function TitleHolder({ title }) {
  return (
    <div className="w-full flex items-center justify-start lg:px-0">
      <div>
        <h1 className="text-[20px] text-primary font-medium">{title}</h1>
      </div>
    </div>
  );
}

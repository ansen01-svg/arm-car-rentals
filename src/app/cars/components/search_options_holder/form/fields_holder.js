export default function FieldsHolder({ children }) {
  return (
    <div className="w-full flex flex-row items-center content-center gap-3 lg:w-[30%]">
      {children}
    </div>
  );
}

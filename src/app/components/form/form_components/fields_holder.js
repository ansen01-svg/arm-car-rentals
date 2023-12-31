export default function FieldsHolder({ children }) {
  return (
    <div className="w-1/2 flex flex-col items-center content-center gap-3 md:flex-row md:gap-5">
      {children}
    </div>
  );
}

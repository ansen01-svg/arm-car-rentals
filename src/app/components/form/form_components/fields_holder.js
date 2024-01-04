export default function FieldsHolder({ children }) {
  return (
    <div className="w-full flex items-center content-center gap-3 md:w-1/2 md:gap-5">
      {children}
    </div>
  );
}

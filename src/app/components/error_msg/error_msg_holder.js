export default function ErrorMsgHolder({ fieldsError }) {
  return (
    <div className="w-full px-4 py-4 text-white text-[14px] bg-red rounded-lg">
      <p>{fieldsError}</p>
    </div>
  );
}

const text = `By clicking on the button below, I acknowledge that I have reviewed the Privacy Statement and have reviewed and accept the Rules & Restrictions and Terms of Use`;

export default function ButtonHolder({ disableBtn }) {
  return (
    <div className="w-full px-3 py-5 bg-white rounded flex flex-col items-center justify-center gap-4">
      <div className="w-full text-primary text-[12px]">
        <p>{text}</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          className="w-full py-3 bg-secondary text-[white] text-medium font-semibold rounded hover:bg-hover disabled:bg-disabled md:w-[25%]"
          type="submit"
          disabled={disableBtn}
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
}

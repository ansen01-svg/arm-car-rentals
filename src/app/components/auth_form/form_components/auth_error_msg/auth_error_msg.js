import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function AuthErrorMsg(props) {
  const { error, setError } = props;

  return (
    <div className="w-full px-4 py-4 bg-[#ffebe9] border-[1px] border-[rgba(255,129,130,0.4)] text-primary text-[14px] flex flex-row items-center justify-between rounded">
      <p>{error}</p>
      <button onClick={() => setError("")}>
        <CloseOutlinedIcon fontSize="small" />
      </button>
    </div>
  );
}

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function Header({ setShowFilterModal }) {
  return (
    <div className="text-primary w-full h-12 px-4 bg-white border-b-[1px] border-slate-200 flex flex-row items-center justify-start sticky top-0 left-0 z-50">
      <CloseButtonAndTitleHolder setShowFilterModal={setShowFilterModal} />
    </div>
  );
}

function CloseButtonAndTitleHolder({ setShowFilterModal }) {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <button onClick={() => setShowFilterModal(false)}>
        <CloseOutlinedIcon fontSize="medium" />
      </button>
      <p className="font-medium">Filter</p>
    </div>
  );
}

function ClearButtonHolder(props) {
  const { params, setParams } = props;

  const clearFilters = () => {
    setParams(params.slice(0, 4));
  };

  return (
    <div>
      <button className="font-medium" onClick={clearFilters}>
        Clear
      </button>
    </div>
  );
}

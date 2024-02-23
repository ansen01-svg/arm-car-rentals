import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function FilterOptionsDisplayHolder(props) {
  const { filters, setFilters } = props;

  // remove particular filter
  const removeFilter = (title) => {
    setFilters((previousState) => {
      let changedFilters = { ...previousState };

      const res = [
        ...Object.values(changedFilters).map((arr) =>
          arr.filter((item) => item !== title)
        ),
      ];

      return {
        type: res[0],
        price: res[1],
        capacity: res[2],
        specification: res[3],
      };
    });
  };

  // clear filter
  const clearFilters = () => {
    setFilters({
      type: [],
      price: [],
      capacity: [],
      specification: [],
    });
  };

  return (
    <div className="w-full flex flex-row items-center justify-start gap-2 flex-wrap">
      {Object.values(filters).map((arr) =>
        arr.map((filter) => {
          return (
            <Button key={filter} title={filter} handleClick={removeFilter} />
          );
        })
      )}
      <button
        className="text-[13px] text-blue underline"
        onClick={clearFilters}
      >
        Remove all filters
      </button>
    </div>
  );
}

function Button(props) {
  const { title, handleClick } = props;

  return (
    <button
      className="px-2 py-1 text-[13px] text-gray1 border-[2px] border-slate-500 rounded-full flex flex-row items-center justify-center gap-2"
      onClick={() => handleClick(title)}
    >
      <span>{title}</span>
      <CloseOutlinedIcon sx={{ fontSize: "16px" }} />
    </button>
  );
}

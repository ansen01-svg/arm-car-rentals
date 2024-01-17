import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import getFilters from "@/app/_lib/frontend/getFilters";
import changeTitle from "@/app/_lib/frontend/changeFilterTitles";

export default function FilterOptionsDisplayHolder(props) {
  const { params, setParams } = props;
  const filters = getFilters(params);

  // remove particular filter
  const removeFilter = (id) => {
    const newParams = params.slice(4).map((param) => {
      const values = Object.values(param)[0].filter((val) => val !== id);
      const key = Object.keys(param)[0];

      return { [key]: values };
    });

    const filteredParams = newParams.filter(
      (param) => Object.values(param)[0].length > 0
    );

    setParams([...params.slice(0, 4), ...filteredParams]);
  };

  // clear filter
  const clearFilters = () => {
    setParams(params.slice(0, 4));
  };

  return (
    <div className="w-full py-3 flex flex-row items-center justify-start gap-2 flex-wrap">
      {filters.length > 0 &&
        filters.map((filter) => {
          return (
            <Button
              key={filter.id}
              filter={filter}
              handleClick={removeFilter}
            />
          );
        })}
      {filters.length > 0 && (
        <button
          className="text-[13px] text-secondary underline"
          onClick={clearFilters}
        >
          Remove all filters
        </button>
      )}
    </div>
  );
}

function Button(props) {
  const { filter, handleClick } = props;
  const modifiedTitle = changeTitle(filter.name);

  return (
    <button
      className="px-2 py-1 text-[13px] text-primary border-[2px] border-slate-500 rounded-full flex flex-row items-center justify-center gap-2"
      onClick={() => handleClick(filter.id)}
    >
      <span>{modifiedTitle}</span>
      <CloseOutlinedIcon sx={{ fontSize: "16px" }} />
    </button>
  );
}

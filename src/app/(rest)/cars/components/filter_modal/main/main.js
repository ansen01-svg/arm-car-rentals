import SortHolder from "./sort_holder";
import FilterHolder from "./filter_holder";
import Button from "./button";

export default function Main(props) {
  const {
    sort,
    handleSortChange,
    filters,
    setShowFilterModal,
    handleFilterChange,
  } = props;

  // close filter modal
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFilterModal(false);
  };

  return (
    <div className="w-full h-[calc(960px-128px)] overflow-y-auto">
      <form
        className="w-full px-4 flex flex-col items-center justify-start gap-2"
        onSubmit={handleSubmit}
      >
        <SortHolder value={sort} handleChange={handleSortChange} />
        <div className="w-full h-[1px] bg-slate-200"></div>
        <FilterHolder
          filters={filters}
          handleFilterChange={handleFilterChange}
        />
        <Button />
      </form>
    </div>
  );
}

import SearchHolder from "./search_holder";

export default function SearchAndFilterHolder(props) {
  const { children, labelFor, placeholder, value, handleChange, handleSubmit } =
    props;

  return (
    <div className="w-full px-6 py-4 flex items-center justify-between lg:px-0">
      <div>{children}</div>
      <SearchHolder
        labelFor={labelFor}
        value={value}
        placeholder={placeholder}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

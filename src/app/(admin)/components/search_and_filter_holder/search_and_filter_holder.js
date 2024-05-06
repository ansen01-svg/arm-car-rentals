import SearchHolder from "./search_holder";

export default function SearchAndFilterHolder(props) {
  const { children, searchTerm, placeholder, handleSubmit } = props;

  return (
    <div className="w-full px-6 py-4 flex items-center justify-between lg:px-0">
      <div>{children}</div>
      <SearchHolder
        searchTerm={searchTerm}
        placeholder={placeholder}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

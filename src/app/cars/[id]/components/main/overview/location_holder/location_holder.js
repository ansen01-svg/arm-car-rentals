import Header from "./header";
import Content from "./content/content";

export default function LocationHolder() {
  return (
    <div
      id="location"
      className="w-full px-3 py-3 bg-white flex flex-col items-center justify-center gap-4 rounded"
    >
      <Header />
      <Content />
    </div>
  );
}

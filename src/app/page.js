import Banner from "./components/banner/banner";
import About from "./components/about/about";

export const metadata = {
  title: "ARM-cheap car rentals",
};

export default function Home() {
  return (
    <div className="max-w-full">
      <Banner />
      <About />
    </div>
  );
}

import Banner from "./components/banner/banner";
import About from "./components/about/about";

export const metadata = {
  title: "ARM-cheap car rentals",
};

export default function Home() {
  return (
    <div className="max-w-full flex flex-col items-center justify-center gap-5 bg-primary md:gap-10">
      <Banner />
      <About />
    </div>
  );
}

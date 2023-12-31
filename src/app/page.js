import Banner from "./components/banner/banner";
import About from "./components/about/about";
import Footer from "./components/footer/footer";

export const metadata = {
  title: "ARM-cheap car rentals",
};

export default function Home() {
  return (
    <>
      <main className="max-w-full">
        <Banner />
        <About />
        <Footer />
      </main>
    </>
  );
}

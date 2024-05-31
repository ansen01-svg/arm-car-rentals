import Banner from "./home_page_components/banner/banner";
import About from "./home_page_components/about/about";
import Workings from "./home_page_components/workings/workings";
import FAQsHolder from "./home_page_components/FAQs/FAQs";

export const metadata = {
  title: "Affordable Car Rental Services | Carko.in",
  description:
    "Discover affordable cars for rental with Carko in Guwahati. Choose from a wide range of vehicles and enjoy great rates. Book your rental today!",
};

export default async function Home() {
  return (
    <div className="max-w-full flex flex-col items-center justify-center gap-3 bg-primary md:gap-8">
      <Banner />
      <About />
      <Workings />
      <FAQsHolder />
    </div>
  );
}

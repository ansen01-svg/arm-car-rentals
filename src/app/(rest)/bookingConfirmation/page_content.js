import Error from "../checkout/components/error/error";
import Header from "./components/header";
import DetailsHolder from "./components/details_holder";

export default function PageContent({ data }) {
  if (data.message === "error") {
    const errorMsg1 = "Page not found.";
    const errorMsg2 = `We apologize, but we cannot find the page you’re looking for.`;
    const errorMsg3 = "your search again.";

    return (
      <div className="w-full">
        <Error
          errorMsg1={errorMsg1}
          errorMsg2={errorMsg2}
          errorMsg3={errorMsg3}
          link={"/"}
          linkTitle={"Restart"}
        />
      </div>
    );
  }

  if (data.message === "duplicate") {
    const errorMsg1 = "Booked trip.";
    const errorMsg2 = "Your trip has already been booked.";
    const errorMsg3 = "your trips to view your booking.";

    return (
      <div className="w-full">
        <Error
          errorMsg1={errorMsg1}
          errorMsg2={errorMsg2}
          errorMsg3={errorMsg3}
          link={"/trips"}
          linkTitle={"Visit"}
        />
      </div>
    );
  }

  if (data.message === "unavailable") {
    const errorMsg1 = "Car unavailable.";
    const errorMsg2 = `We apologize, but the car you are looking for is not available.`;
    const errorMsg3 = "the process with a different dates.";

    return (
      <div className="w-full">
        <Error
          errorMsg1={errorMsg1}
          errorMsg2={errorMsg2}
          errorMsg3={errorMsg3}
          link={"/"}
          linkTitle={"Restart"}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-[355px] px-3 py-5 flex flex-col items-center justify-start gap-5 md:px-20">
      <Header />
      <DetailsHolder trip={data} />
    </div>
  );
}

import Error from "./components/error/error";
import InfoFormSection from "./components/info_form_section/info_form_section";
import TripDetailsSection from "./components/trip_details_section/trip_details_section";

const errorMsg1 = "Page not found.";
const errorMsg2 =
  "We apologize, but we cannot find the page you’re looking for.";
const errorMsg3 = "your search again.";

export default function PageContent({ trip }) {
  if (!trip) {
    return (
      <div className="w-full px-3 py-3 flex flex-col items-center justify-center gap-5 md:flex-row-reverse md:items-start lg:px-20 lg:py-6">
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
    <div className="w-full px-3 py-3 flex flex-col items-center justify-center gap-5 md:flex-row-reverse md:items-start lg:px-20 lg:py-6">
      <TripDetailsSection trip={trip} />
      <InfoFormSection tripId={trip._id} />
    </div>
  );
}

import Error from "./components/error/error";
import InfoFormSection from "./components/info_form_section/info_form_section";
import TripDetailsSection from "./components/trip_details_section/trip_details_section";

export default function PageContent({ trip }) {
  if (!trip) {
    return (
      <div className="w-full px-3 py-3 flex flex-col items-center justify-center gap-5 md:flex-row-reverse md:items-start lg:px-20 lg:py-6">
        <Error />
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

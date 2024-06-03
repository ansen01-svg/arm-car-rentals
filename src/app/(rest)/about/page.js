import PageContent from "./page_content";

export const metadata = {
  title: "About us | Carko.in",
  description:
    "Learn more about Carko, your trusted car rental service. Discover our mission, values, and the team dedicated to providing you with the best car rental experience. Rent a car with confidence and convenience with Carko.",
};

export default async function About() {
  return (
    <div className="max-w-full bg-primary">
      <PageContent />
    </div>
  );
}

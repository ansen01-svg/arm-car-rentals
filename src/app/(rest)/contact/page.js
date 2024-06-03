import PageContent from "./page_content";

export const metadata = {
  title: "Contact Us | Carko.in",
  description:
    "Get in touch with Carko for any inquiries, support, or feedback. We're here to help you with all your car rental needs in Guwahati, Assam. Contact us today to learn more about our services and how we can assist you.",
};

export default async function Contact() {
  return (
    <div className="max-w-full bg-primary">
      <PageContent />
    </div>
  );
}

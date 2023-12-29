import sanityClient from "@/sanity/sanity_client";

export default async function Cars() {
  const cars = await sanityClient.fetch(`*[_type == "car"]`);
  console.log(cars);

  return <div>Cars page</div>;
}

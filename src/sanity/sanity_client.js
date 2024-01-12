import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-12",
  useCdn: true,
});

export default sanityClient;

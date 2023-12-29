import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-12-29",
  useCdn: true,
});

export default sanityClient;

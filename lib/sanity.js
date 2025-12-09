import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2025-05-03",
  dataset: "production", // we have created when we install sanity with terminal command
  projectId: "4lcwndcn", // check project id at sanity.io - manage project
  useCdn: false,
});

// Convert image source to url
const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

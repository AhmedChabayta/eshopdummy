import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "uq2ekud4",
  dataset: "production",
  apiVersion: "2022-04-26",
  useCdn: true,
  token: process.env.SECRET_SANITY_TOKEN,
});

function urlForThumbnail(source) {
  return imageUrlBuilder(client).image(source).width(300).url();
}
function urlFor(source) {
  return imageUrlBuilder(client).image(source).width(580).url();
}
export { urlForThumbnail };
export { urlFor };

import { createClient } from "./prismic";

export async function getAllBlogs() {
  const client = createClient();

  const donations = await client.getAllByType("donations", {
    orderings: {
      field: "my.donations.published_date",
      direction: "desc",
    },
  });

  return donations;
}


export async function getBlogByUID(uid: string) {
  const client = createClient();

  const donation = await client.getByUID("donations", uid);

  return donation;
}

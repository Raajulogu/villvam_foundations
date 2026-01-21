import * as prismic from "@prismicio/client";

export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_REPO!;

export const createClient = () => {
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return client;
};

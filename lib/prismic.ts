import * as prismic from "@prismicio/client";
import sm from "../slicemachine.config.json";

export const repositoryName = sm.repositoryName;

export const createClient = () => {
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return client;
};

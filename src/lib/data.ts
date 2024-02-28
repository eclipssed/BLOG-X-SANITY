"use server";

import { groq } from "next-sanity";
import { client } from "./createClient";

export const getPosts = async () => {
  try {
    const query = groq`*[_type == 'post']{
          ...,
          author->,
            categories[]->,
        } | order(_createAt asc)`;
    const posts = await client.fetch(query);

    return posts;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (slug: any) => {
  try {
    const query = groq`*[_type == 'post' && slug.current == "${slug}"]{
            ...,
            author->,
            categories[]->,
        } | order(_createAt asc)`;

    const post = await client.fetch(query);
    return post[0];
  } catch (error) {
    throw error;
  }
};

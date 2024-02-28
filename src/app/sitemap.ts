import { getPosts } from "../lib/data";

export default async function sitemap() {
  const baseUrl = "https://mama-magic-hub.vercel.app/";

  const posts = await getPosts();
  const postsUrls =
    posts.map((post: any) => {
      return {
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: post._updatedAt,
      };
    }) ?? [];
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postsUrls,
  ];
}

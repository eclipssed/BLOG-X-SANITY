import React from "react";
import PostCard from "@/src/components/PostCard";
import { urlFor } from "@/src/lib/createClient";
import { getPosts } from "../lib/data";

export const revalidate = 86400;

const BlogSection = async () => {
  const posts = await getPosts();
  // console.log(posts[0].slug);
  const filteredPosts = await posts.slice(0, 6);

  return (
    <section className="mt-36 text-center">
      <h2 className="text-4xl font-bold">Recent Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
        {filteredPosts.map((post) => (
          <PostCard
            key={post._id}
            img={urlFor(post?.mainImage).url()}
            slug={post.slug.current}
            title={post.title}
            description={post.description}
            categories={post.categories}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

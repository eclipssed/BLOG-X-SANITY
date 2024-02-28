import React from "react";
import heroImg1 from "@/public/assets/heroImg1.jpg";
import PostCard from "@/src/components/PostCard";
import Image from "next/image";
import { Post } from "@/src/lib/types/types";
// import { client } from "@/src/lib/createClient";
import { client, urlFor } from "@/src/lib/createClient";

import { groq } from "next-sanity";
import { getPosts } from "@/src/lib/data";

export const revalidate = 86400;


const BlogPage = async () => {
  const posts = await getPosts();
  // console.log(posts);
  return (
    <section className="wrapper text-center mt-36">
      <h2 className="text-4xl font-bold">All Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
        {posts.map((post) => (
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

export default BlogPage;

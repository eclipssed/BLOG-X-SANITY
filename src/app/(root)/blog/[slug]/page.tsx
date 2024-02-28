import React from "react";
import { urlFor } from "@/src/lib/createClient";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/src/components/RichText";
import { FaRegClock } from "react-icons/fa6";
import Link from "next/link";
import { getPost } from "@/src/lib/data";

export const revalidate = 10;
// export const revalidate = 86400;

const SlugPage = async ({ params: { slug } }: any) => {
  const post = await getPost(slug);
  // console.log(urlFor(post?.mainImage).url());

  return (
    <section className="wrapper mt-36">
      <div className="">
        <div className="flex flex-col prose prose-h1:mb-0 prose-p:my-0 items-center max-w-4xl mx-auto mb-16 md:mb-32">
          <h1 className="">{post.title}</h1>
          <div className="p-0 flex flex-col md:flex-row justify-between items-center gap-4 w-full ">
            <p className="text-xl font-semibold flex gap-2 items-center">
              <Image
                src={urlFor(post?.author.image).url()}
                alt="image"
                width={200}
                height={200}
                className=" w-10 h-10 rounded-full object-cover "
              />
              Written By:
              <Link className="  capitalize" href={"/"}>
                {post.author.name}
              </Link>
            </p>
            <p className="text-xl font-semibold flex gap-2 items-center">
              <FaRegClock />
              Last updated: {post._updatedAt.slice(0, 10)}
            </p>
          </div>
          <div className="w-full ">
            <Image
              src={urlFor(post?.mainImage).url()}
              alt="image"
              width={1000}
              height={1000}
              className="object-cover "
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-4xl mx-auto mb-16">
          <PortableText value={post?.body} components={RichText} />
        </div>
        <div className="max-w-4xl mx-auto flex  text-start gap-8 items-center bg-green-100 rounded-lg p-4 ">
          <Image
            src={urlFor(post?.author.image).url()}
            alt="image"
            width={200}
            height={200}
            className=" w-32 h-32 rounded-lg object-cover "
          />
          <div className="flex flex-col gap-2">
            <p className="text-2xl text-green-700 font-semibold capitalize">
              {post?.author?.name}
            </p>
            <p className="capitalize ">{post?.author?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlugPage;

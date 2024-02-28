/* eslint-disable @next/next/no-img-element */
import { urlFor } from "@/src/lib/createClient";
import { getPost } from "@/src/lib/data";
import { ImageResponse } from "next/og";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Expolorer | Blog";
export const contentType = "image/png";

export default async function og({ params: { slug } }: any) {
  const post = await getPost(slug);
  //   console.log(post.mainImage.alt);

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1"
            src={urlFor(post?.mainImage).url()}
            alt={post.mainImage.alt}
          />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black opacity-70" />
        </div>
        <div tw="flex flex-col text-neutral-50 px-8">
          <div tw="text-6xl text-center font-bold">{post?.title}</div>
        </div>
      </div>
    ),
    size
  );
}

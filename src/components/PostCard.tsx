import React from "react";
import { IoEye } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

// interface Props {
//   posts: Post[];
// }

const ProjectCard = ({ img, title, description, slug, categories }: any) => {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg">
      <div className="overflow-hidden h-72 w-full  rounded-t-xl relative group">
        <Image
          src={img}
          alt="postImage"
          fill
          className=" object-cover absolute -mt-0"
        />
        <div className="absolute rounded-xl h-full w-full top-0 right-0 hidden bg-[#121212] opacity-70 group-hover:flex group-hover:bg-opacity-70 ease-in-out duration-500 gap-4 justify-center items-center">
          <Link
            href={`/blog/${slug}`}
            className="h-14 w-14 border-2  text-slate-400  group-hover:border-white rounded-full flex justify-center items-center hover:!text-white group/link"
          >
            <IoEye className="h-10 w-10   cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className=" rounded-xl py-4 px-6 text-start space-y-3">
        <h2 className="text-black  text-xl font-bold line-clamp-3">{title}</h2>
        <p className="text-slate-800 text-base md:text-lg  line-clamp-3 ">
          {description}
        </p>
        <div className="flex justify-between items-center gap-4 flex-col md:flex-row">
          <Link
            href={`/blog/${slug}`}
            className="bg-green-500 xl:text-xl hover:bg-green-600 no-underline text-white font-semibold py-2 px-6 rounded-lg inline-block transition duration-300"
          >
            Read Now
          </Link>
          {categories.map((category: any) => (
            <p key={category._id} className="text-pink-600 line-clamp-2 ">
              {"# "}
              {category.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
import XLayout from "@/components/XLayout";
const page = () => {
  return (
    <XLayout>
      <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
        <div className=" w-full flex items-center flex-col">
          <div className="flex items-center w-full justify-start gap-3">
            {/* {data.author?.profileImageURL && ( */}
            <Image
              className="rounded-full"
              src={"https://avatars.githubusercontent.com/u/109175397?v=4"}
              alt="user-image"
              height={50}
              width={50}
            />
            <h5>
              <Link href={"/${data.author?.id}"}>
                {/* {data.author?.firstName} {data.author?.lastName} */}
                Ritik Shah
              </Link>
            </h5>
            {/* )} */}
          </div>
          <div className="flex justify-center flex-col">
            <p>content</p>
            {/* {data.imageURL && ( */}
            <Image
              src={"https://avatars.githubusercontent.com/u/109175397?v=4"}
              alt="image"
              width={450}
              height={400}
            />
            {/* )} */}
            <div className="flex justify-between mt-5 text-xl items-center p-2 w-full border-b-[1px] border-gray-800">
              <div>
                <AiOutlineHeart />
              </div>
              <div>
                <BiMessageRounded />
              </div>
              <div>
                <CiShare1 />
              </div>
              <div>
                <CiBookmark />
              </div>
            </div>
            <div className="w-full relative">
              <div className="flex gap-2 my-2 w-fit border-b-[1px] border-gray-800 py-2">
                <h1>Ritik Shah</h1>
                <h1>Nice One!</h1>
                <h1>reply</h1>
              </div>
              <div className="flex gap-2 w-fit border-b-[1px] border-gray-800 pb-2 self-end absolute left-1/2">
                <h1>Rishabh</h1>
                <h1>Heyy</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </XLayout>
  );
};

export default page;

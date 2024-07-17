import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
const FeedCard = (props) => {

  return (
    <div className=" hover:bg-slate-800 transition-all cursor-pointer border-b-[1px] border-gray-700 ">
      <div className=" w-full flex items-center flex-col p-5">
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
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-full">
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
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

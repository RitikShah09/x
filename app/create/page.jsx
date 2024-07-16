import XLayout from '@/components/XLayout'
import React from 'react'
import { BiImageAlt } from "react-icons/bi";

const page = () => {
  return (
    <XLayout>
      <div className="col-span-11 p-11">
        <textarea
          value='uyf'
        //   onChange={(e) => setContent(e.target.value)}
          className="w-full bg-transparent text-xl px-3 border-b border-slate-700"
          placeholder="What's happening?"
          rows={3}
        ></textarea>
        {/* {imageURL && (
          <Image src={imageURL} alt="tweet-image" width={300} height={300} />
        )} */}
        <div className="mt-2 flex justify-between items-center">
          <BiImageAlt  className="text-xl" />
          <button
            // onClick={handleCreateTweet}
            className="bg-[#1d9bf0] font-semibold text-sm py-2 px-4 rounded-full"
          >
            Tweet
          </button>
        </div>
      </div>
    </XLayout>
  );
}

export default page
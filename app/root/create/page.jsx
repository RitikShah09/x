"use client";
import XLayout from "@/components/XLayout";
import { asyncCreatePost } from "@/store/Actions/postActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiImageAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [postImage, setPostImage] = useState();
  const dispatch = useDispatch();
  const click = () => {
    document.querySelector(".file").click();
  };

  const AvatarHandler = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("post", e.target.post.files[0]);
    formdata.set("text", e.target.text.value);
    await dispatch(asyncCreatePost(formdata));
    router.back();
  };

  const onImageChange = (event) => {
    setShow(true);
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setPostImage(event.target.files[0]);
    }
  };
  return (
    <XLayout>
      <form className="col-span-11 p-11" onSubmit={AvatarHandler}>
        <div className=" flex gap-2">
          <img
            className=" h-10 w-10 rounded-full object-cover"
            src="https://avatars.githubusercontent.com/u/109175397?v=4"
            alt="user-avatar"
          />
          <textarea
            name="text"
            //   onChange={(e) => setContent(e.target.value)}
            className="w-full bg-transparent outline-none text-xl px-3 border-b border-slate-700"
            placeholder="What's happening?"
            rows={3}
          ></textarea>
        </div>
        {image && <img src={image} alt="tweet-image" />}
        <div className="mt-2 ml-12 flex justify-between items-center">
          <input
            className="file hidden"
            type="file"
            name="post"
            onChange={(e) => {
              onImageChange(e);
            }}
          />
          <BiImageAlt className="text-xl cursor-pointer" onClick={click} />
          <button
            type="submit"
            className="bg-[#1d9bf0] font-semibold text-sm py-2 px-4 rounded-full"
          >
            Post
          </button>
        </div>
      </form>
    </XLayout>
  );
};

export default Page;

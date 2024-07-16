import Image from "next/image";
import { BsArrowLeftShort } from "react-icons/bs";
import FeedCard from "@/components/FeedCard";
import XLayout from "@/components/XLayout";

const UserProfilePage = () => {
  return (
    <div>
      <XLayout>
        <div>
          <nav className="flex items-center gap-3 py-3 px-3">
            <BsArrowLeftShort className="text-4xl" />
            <div>
              <h1 className="text-2xl font-bold">
                {/* {props.userInfo?.firstName} {props.userInfo?.lastName} */}
                Ritik Shah
              </h1>
              <h1 className="text-md font-bold text-slate-500">0 Tweets</h1>
            </div>
          </nav>
          <div className="p-4 border-b border-slate-800">
            {/* {props.userInfo?.profileImageURL && ( */}
            <Image
              src={"https://avatars.githubusercontent.com/u/109175397?v=4"}
              alt="user-image"
              className="rounded-full"
              width={100}
              height={100}
            />
            {/* )} */}
            <h1 className="text-2xl font-bold mt-5">Ritik Shah</h1>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 mt-2 text-sm text-gray-400">
                <span>0 followers</span>
                <span>0 following</span>
              </div>
              {/* {currentUser?.id !== props.userInfo?.id && ( */}
              <>
                {/* {amIFollowing ? ( */}
                <button
                  //   onClick={handleUnfollowUser}
                  className="bg-white text-black px-3 py-1 rounded-full text-sm"
                >
                  Unfollow
                </button>
                {/* ) : ( */}
                {/* <button
                    //   onClick={handleFollowUser}
                      className="bg-white text-black px-3 py-1 rounded-full text-sm"
                    >
                      Follow
                    </button>
                  )} */}
              </>
              {/* )} */}
            </div>
          </div>
          <div>
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
        </div>
      </XLayout>
    </div>
  );
};

export default UserProfilePage;

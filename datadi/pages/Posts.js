import React, { useState } from "react";
import PostCardCmp from "./components/PostComponent/PostCardCmp";
import data from "./utils/data.json";

const AllPosts = () => {
  const [postsArr, setPostArr] = useState(data.posts);
  // console.log(postsArr);
  return (
    <div className='flex justify-between flex-wrap mt-[2rem] px-[50px]'>
      {postsArr.map((data) => (
        <PostCardCmp data={data} />
      ))}
      {/* <PostCardCmp data={postsArr} /> */}
    </div>
  );
};

export default AllPosts;

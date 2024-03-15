import React, { useState } from "react";
import PostCardCmp from "./components/PostComponent/PostCardCmp";
import data from "./utils/data.json";

const AllPosts = () => {
  const [postsArr, setPostArr] = useState(data.posts);
  console.log(postsArr);
  return (
    <div>
      {postsArr.map((data) => (
        <PostCardCmp data={postsArr} />
      ))}
      {/* <PostCardCmp data={postsArr} /> */}
    </div>
  );
};

export default AllPosts;

import React, { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import "./posts.css";

export const Posts = () => {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        setPostData(data);
        // console.log(data);
      })
      .catch((err) => alert(err));
  }, []);


  

  return postData ? (
    <div className="parent">
      {postData.map((post) => (
        <PostCard key={post.id} data={post} />
      ))}
    </div>
  ) : (
    <p>loading</p>
  );
};

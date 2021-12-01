import React from "react";
import Post from "./Post";

const Posts = () => {
  const data = [
    {
      id: "123",
      username: "milan",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "this is a caption",
    },
    {
      id: "123",
      username: "milan",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "this is a caption",
    },
    {
      id: "123",
      username: "milan",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "this is a caption",
    },
  ];

  return (
    <div>
      {data.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;

import React, { useState } from "react";

const AddToPost = () => {
  const [post, setPost] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const addPost = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      options
    );

    const data = await response.json();
    console.log(data);
    fetchData();
  };

  return (
    <div>
      <form onSubmit={addPost}>
        <div>
          <label htmlFor="userId">User id</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={post.userId}
            onChange={(e) => setPost({ ...post, userId: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="body">Post body</label>
          <input
            type="text"
            id="body"
            name="body"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddToPost;

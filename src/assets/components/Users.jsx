import React, { useEffect, useState } from "react";
import "./Users.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserPosts = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="all">
      <div className="container location">
        <div className="users">
          {users.map((user) => (
            <div key={user.id} className="user">
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.username}</p>
              <p>Email:{user.email}</p>
              <p>Website:{user.website}</p>
              <p>
                Address:
                {user.address.city},{user.address.street}
              </p>
              <p>Phone:{user.phone}</p>
              <div className="buttons">
                <button onClick={() => getUserPosts(user.id)}>Posts</button>
                <button onClick={() => getUserTodos(user.id)}>Todos</button>
                <button onClick={() => getUserAlbum(user.id)}>Album</button>
              </div>
            </div>
          ))}
        </div>

        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <p>{post.userId}</p>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;

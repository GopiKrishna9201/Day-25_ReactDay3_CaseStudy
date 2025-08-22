import React, { useEffect, useState } from "react";

const PostsWithComments = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  useEffect(() => {
    if (selectedPost) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${selectedPost}/comments`)
        .then((res) => res.json())
        .then(setComments);
    }
  }, [selectedPost]);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.slice(0, 10).map((p) => (
          <li key={p.id} onClick={() => setSelectedPost(p.id)} style={{ cursor: "pointer" }}>
            {p.title}
          </li>
        ))}
      </ul>

      {selectedPost && (
        <div>
          <h3>Comments</h3>
          <ul>
            {comments.map((c) => (
              <li key={c.id}>
                <strong>{c.name}:</strong> {c.body}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostsWithComments;

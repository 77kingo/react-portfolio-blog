import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('/posts/posts.json')
      .then(res => res.json())
      .then(setPosts)
      .catch(err => {
        console.error('Failed to load posts:', err);
        setPosts([]);
      });
  }, []);

  return (
    <div className="blog">
      <h1>Blog</h1>
      {!posts ? (
        <p>Loading posts…</p>
      ) : posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul className="post-list">
          {posts.map(p => (
            <li key={p.slug} className="post-item">
              <h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
              <p className="summary">{p.summary}</p>
              <small>{p.date}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';

export default function Post() {
  const { slug } = useParams();
  const [html, setHtml] = useState('<p>Loading…</p>');

  useEffect(() => {
    if (!slug) return;
    fetch(`/posts/${slug}.md`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then(text => setHtml(marked.parse(text)))
      .catch(() => setHtml('<p>Post not found.</p>'));
  }, [slug]);

  return (
    <article className="post">
      <Link to="/blog">← Back to blog</Link>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}

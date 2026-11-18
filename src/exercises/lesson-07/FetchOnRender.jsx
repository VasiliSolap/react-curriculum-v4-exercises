import { useEffect, useState } from 'react';
import { getPosts } from './api';
import './Lesson07Styles.css';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isRan = false;

    (async () => {
      try {
        const data = await getPosts();
        if (!isRan) {
          setPosts(data);
        }
      } catch (error) {
        if (!isRan) {
          setError(error.message);
        }
      } finally {
        if (!isRan) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      isRan = true;
    };
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {isLoading && <p>Loading posts...</p>}
        {error && <p>Error: {error}</p>}
        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { getSinglePost } from './api';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleGetPost() {
    setIsLoading(true);
    setError('');
    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button
        type="button"
        className="button"
        onClick={handleGetPost}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Get post'}
      </button>
      <div className="content">
        {error && <p>Error: {error}</p>}
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        ) : (
          !isLoading &&
          !error && (
            <p>
              Click <code>Get post</code> to load a post
            </p>
          )
        )}
      </div>
    </div>
  );
}

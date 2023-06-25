import React, { useState } from 'react';

const Post = ({ title, content, onClick }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={onClick}>Review</button>
    </div>
  );
};

const Review = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <h4>Leave a Review:</h4>
      <form>
        <input type="text" placeholder="Your opinion" />
      </form>
      {/* Add your review form or components here */}
    </div>
  );
};

const PostsPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div>
      <h1>Posts Page</h1>
      {selectedPost ? (
        <Review title={selectedPost.title} content={selectedPost.content} />
      ) : (
        <>
          <Post
            title="Post 1"
            content="This is the content of Post 1."
            onClick={() =>
              handlePostClick({
                title: 'Post 1',
                content: 'This is the content of Post 1.',
              })
            }
          />
          <Post
            title="Post 2"
            content="This is the content of Post 2."
            onClick={() =>
              handlePostClick({
                title: 'Post 2',
                content: 'This is the content of Post 2.',
              })
            }
          />
          {/* Add more posts here */}
        </>
      )}
    </div>
  );
};

export default PostsPage;
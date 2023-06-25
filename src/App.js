import React from 'react';
import WalletConnect from './wallet';
import PostsPage from './PostsPage';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <WalletConnect />
      

      <PostsPage />
    </div>
  );
};

export default App;
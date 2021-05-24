import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      my post
      <div>
        new post
          </div>
      <div>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default MyPosts;
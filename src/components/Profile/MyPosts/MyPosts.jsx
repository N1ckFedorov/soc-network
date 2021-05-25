import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      my post
      <div>
        new post
          </div>
      <div>
        <Post message="Hello"  likesCount="50"/>
        <Post message="It's my first posr" likesCount="15"/>
      </div>
    </div>
  )
}

export default MyPosts;
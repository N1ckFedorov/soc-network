import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.img} src="https://forakyafrica-drilling.com/wp-content/uploads/2020/12/man-300x300-1.png" alt="" />
      {props.message}
      <div>
        <span>like</span>
        <span>{props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;


import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://www.istockphoto.com/resources/images/HomePage/Hero/682374404.jpg" alt="" />
      </div>
      <div>
        <img src="https://sun9-51.userapi.com/impf/c840437/v840437709/1e44b/Y5Ln9NPuKR8.jpg?size=800x800&quality=96&sign=124f4c2dec04aeeb4d8103aebcbb732d&type=album" alt="" />
          ava + desc
        </div>
      <MyPosts/>
    </div>
  )
}

export default Profile;
import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://pngimg.com/uploads/triangle/triangle_PNG30.png" alt='logo' className={s.logo} ></img>
    </header>
  )
}

export default Header;
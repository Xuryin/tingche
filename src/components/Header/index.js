import React from 'react';
import { left, right } from '@/assets/images';

import './index.styl'

const Header = (props) => {
  const { text } = props;

  return (
    <div className="header-container">
      {/*  <img src={left} className="header-img" alt="left" />
      <div className="header-text">{ text }</div>
      <img src={right} className="header-img" alt="right" />*/}
    </div>
  );
}

export default Header;
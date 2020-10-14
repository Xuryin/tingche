import React from 'react';
import './index.styl';

const HeaderTitle = (props) => {
  const { className, text, color } = props;
  let classNames = `header-title-container ${className}`;

  return (
    <div className={classNames} style={{ color }}>
      {
        text
      }
    </div>
  );
}

export default HeaderTitle;

import React from 'react';
import './index.styl';

const ContentBox = (props) => {
  const { className, children, text, childrenClass } = props;
  let classNames = `content-box-container ${className}`;

  return (
    <div className={classNames}>
      <div className='content-box-header'>
        <p>{text}</p>
      </div>
      <div className={childrenClass}>
        {
          children
        }
      </div>
    </div>
  );
}

export default ContentBox;

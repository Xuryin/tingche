import React from 'react';
import './index.styl';

const HeaderText = (props) => {
  const { text, className, children } = props;
  let classNames = `header-text-container ${className}`;

  return (
    <div className={classNames}>
      <div className="header-text-bk">{ text }</div>
      <div className="header-text-right">
        {children}
      </div>
    </div>
  );
}

export default HeaderText;

import React from 'react';

const Toast = ({ message, isError, show }) => {
  return (
    <div className={`toast ${show ? 'show' : ''} ${isError ? 'error' : ''}`}>
      {message}
    </div>
  );
};

export default Toast;
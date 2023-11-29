import React, { useState } from 'react';

const T12_42_UseStateBasics = () => {
  // let title = 'random text';

  const[title, setTitle] = useState('random title');
  const handleClick = () => {
    setTitle('Hello World');
    console.log('title',title);
  }

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className='btn' onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default T12_42_UseStateBasics;
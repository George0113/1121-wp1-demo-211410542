import React, { useState } from 'react';

const T14_42_UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'George',
    id:211410542,
    message:'random message'
  });

  const changMessage = ()=>{
    setPerson({...person,message:`Welcome,George`});
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.id}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changMessage}>Chang Message</button>

    </>
  );
};

export default T14_42_UseStateObject;
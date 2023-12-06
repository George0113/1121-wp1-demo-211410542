import React, { useState, useEffect } from 'react';

const T33_42_ShowHide = () => {
    const [showAlert, setShowAlert] = useState(false);
  return (
    <>
        <button className='btn' onClick={()=>setShowAlert(!showAlert)}>toggle
         Alert</button>
         {showAlert && <Alert />}
    </>
  );
};

const Alert =() =>{
    return (
        <>
            <div className="alert alert-danger">Hello world</div>
        </>
    )
}

export default T33_42_ShowHide;
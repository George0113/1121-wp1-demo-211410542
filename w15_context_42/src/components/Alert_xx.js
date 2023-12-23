import React, { useEffect } from 'react';
import { useBlogContext } from '../App_xx';



const Alert_xx = () => {
  const {alert,showAlert} =useBlogContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return <p className={`alert alert-${alert.type}`}> {alert.msg} </p>;
};

export default Alert_xx;

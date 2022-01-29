import React, { useEffect, useState } from 'react';
import './Clock.scss'
const Clock = () => {
    const[clock,setclock]=useState()

    useEffect(()=>{
        setInterval(() => {
            const date = new Date()
            setclock(date.toLocaleTimeString())
        }, 1000);
    },[])
  return (<div className='clock'>
      <h1 className='digital'>{clock}</h1>
  </div>)
};

export default Clock;

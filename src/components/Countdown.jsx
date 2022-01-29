import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [crono, setCrono] = useState();
  useEffect(() => {
    const limit = new Date("August 28, 2022 13:21:00").getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      let distance = limit - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCrono(
        `${days} D ${hours} H ${minutes} M ${seconds} S`
      );
      if (distance < 0) {
        clearInterval(x);
        setCrono("COUNTDOWN FINISHED");
      }
    }, 1000);
  }, []);

  return (
    <div className="container">
      <h1 className="crono">{crono}</h1>
    </div>
  );
};

export default Countdown;

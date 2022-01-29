import { useEffect, useState } from "react";
import Button from "./Button";
import "./Chrono.scss";
const Chrono = () => {
  const [tiempo, setTiempo] = useState(0);
  const [tiempoOn, setTiempoOn] = useState(false);
  useEffect(() => {
    let interval = null;
    tiempoOn
      ? (interval = setInterval(() => {
          setTiempo((prev) => prev + 10);
        }, 10))
      : clearInterval(interval);

    return () => clearInterval(interval);
  }, [tiempoOn]);

  return (
    <div>
      <div className="cono">
        <h1>{("0" + Math.floor((tiempo / 60000) % 60)).slice(-2)}:</h1>
        <h1>{("0" + Math.floor((tiempo / 1000) % 60)).slice(-2)}:</h1>
        <h1>{("0" + ((tiempo / 10) % 100)).slice(-2)}</h1>
      </div>

      <div>
        {!tiempoOn && tiempo === 0 && (
          <Button
            onClick={() => {
              setTiempoOn(true);
            }}
          >
            start
          </Button>
        )}
        {tiempoOn && (
          <Button
            onClick={() => {
              setTiempoOn(false);
            }}
          >
            stop
          </Button>
        )}
        {!tiempoOn && tiempo > 0 && (
          <Button
            onClick={() => {
              setTiempo(0);
            }}
          >
            reset
          </Button>
        )}
        {!tiempoOn && tiempo > 0 && (
          <Button
            onClick={() => {
              setTiempoOn(true);
            }}
          >
            resume
          </Button>
        )}
      </div>
    </div>
  );
};

export default Chrono;

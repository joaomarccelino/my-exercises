import { useEffect, useState } from "react";
import ControlButtons from "../ControlButtons";
import Timer from "../Timer";
import './style.css';
type StopWatchProps = {
  series: number
}

const StopWatch = ({ series }: StopWatchProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [completedSeries, setCompletedSeries] = useState(0);

  useEffect(() => {
    let interval: any = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setCompletedSeries(completedSeries + 1);
  };

  return (
    <div className="stop-watch">

      {
        completedSeries === series ?
          <h2>Completou!</h2> :
          <>
            <p className="completed-series"> Séries completas: <span>{completedSeries}</span> </p>
            <Timer time={time} />
            <ControlButtons
              active={isActive}
              isPaused={isPaused}
              handleStart={handleStart}
              handlePauseResume={handlePauseResume}
              handleReset={handleReset}
            />
          </>
      }
    </div>
  );
}

export default StopWatch;
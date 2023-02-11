import './style.css';
type ControlButtonsProps = {
  handleStart: () => void;
  handleReset: () => void;
  handlePauseResume: () => void;
  active: boolean;
  isPaused: boolean
}



const ControlButtons = ({handleStart, handleReset,  handlePauseResume, active, isPaused}: ControlButtonsProps) => {
  const StartButton = (
    <div className="btn btn-one btn-start"
         onClick={handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" 
           onClick={handleReset}>
        Reset
      </div>
      <div className="btn btn-one" 
           onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  
  return (
    <div className="Control-Buttons">
      <div>{active ? ActiveButtons : StartButton}</div>
    </div>
  )
}

export default ControlButtons
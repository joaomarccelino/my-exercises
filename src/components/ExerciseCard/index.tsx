import { useState } from 'react';
import StopWatch from '../StopWatch';
import './style.css';

type ExerciseCardProps = {
  exercise: string;
  series: number;
  repetitions: number | string;
  muscle: string;
  cardIndex: number;
  weight: number;
}

const ExerciseCard = ({ exercise, series, repetitions, muscle, cardIndex, weight }: ExerciseCardProps) => {
  const [startExercise, setStartExercise] = useState(false);
  function showExerciseInfo() {
    const exerciseCards = document.querySelectorAll('.exercise-info');
    if (startExercise) {
      exerciseCards.forEach((exerciseCard, index) => {
        if (exerciseCard instanceof Element) {
          if (index === cardIndex) {
            exerciseCard?.classList.remove('active');
            setStartExercise(false);
          }
        }
      })
    } else {
      exerciseCards.forEach((exerciseCard, index) => {
        if (exerciseCard instanceof Element) {
          if (index === cardIndex) {
            exerciseCard?.classList.add('active');
            setStartExercise(true);
          }
        }
      })
    }


  }
  const baseURL = "https://www.youtube.com/results?search_query="

  return (
    <div className="exercise">
      <h2>
        <a href={`${baseURL}${encodeURIComponent(exercise)}`} target="_blank">{exercise}</a>
      </h2>
      <div className="exercise-info">
        <div className="exercise-data">
          <div className='info-data'>
            <p className='info-title'>Séries</p>
            <span className="info-amount">{series}</span>
          </div>
          <div className='info-data'>
            <p className='info-title'>Repetições</p>
            <span className="info-amount">{repetitions}</span>
          </div>
          <div className='info-data'>
            <p className='info-title'>Músculo</p>
            <span className="info-amount">{muscle}</span>
          </div>
          <div className='info-data'>
            <p className='info-title'>Peso</p>
            <span className="info-amount">{weight}kg</span>
          </div>
        </div>
        <StopWatch series={series} />
      </div>
      <button className="end-btn" onClick={showExerciseInfo}>{startExercise ? "Finalizar" : "Iniciar"}</button>
    </div>
  )
}

export default ExerciseCard
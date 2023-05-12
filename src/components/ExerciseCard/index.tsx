import { useState } from 'react';
import StopWatch from '../StopWatch';
import './style.css';

type ExerciseCardProps = {
  exercise: string;
  series: number;
  repetitions: number | string;
  muscle: string;
  cardIndex: number;
}

const ExerciseCard = ({ exercise, series, repetitions, muscle, cardIndex }: ExerciseCardProps) => {
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
        <a href={`${baseURL}${encodeURIComponent(exercise)}`}>{exercise}</a>
      </h2>
      <div className="exercise-info">
        <p>Séries: {series}</p>
        <p>Repetições: {repetitions}</p>
        <StopWatch series={series} />
        <p>Músculo: {muscle}</p>
        <label htmlFor="weight">Peso</label>
        <input type="number" />
      </div>
      <button className="end-btn" onClick={showExerciseInfo}>{startExercise ? "Finalizar" : "Iniciar"}</button>
    </div>
  )
}

export default ExerciseCard
import { useState } from 'react';
import StopWatch from '../StopWatch';
import './style.css';

type ExerciseCardProps = {
  exercise: string;
  series: number;
  repetitions: number | string;
  muscle: string;
}

const ExerciseCard = ({ exercise, series, repetitions, muscle }: ExerciseCardProps) => {
  const [startExercise, setStartExercise] = useState(false);
  const baseURL = "https://www.youtube.com/results?search_query="

  return (
    <div className="exercise">
      <h2>
        <a href={`${baseURL}${encodeURIComponent(exercise)}`}>{exercise}</a>
      </h2>
      {
        startExercise &&
        <div className="exercise-info">
          <p>Séries: {series}</p>
          <p>Repetições: {repetitions}</p>
          <StopWatch series={series} />
          <p>Músculo: {muscle}</p>
          <label htmlFor="weight">Peso</label>
          <input type="number" />
        </div>
        }
      <button className="end-btn" onClick={() => setStartExercise(!startExercise)}>{startExercise ? "Finalizar" : "Iniciar"}</button>
    </div>
  )
}

export default ExerciseCard
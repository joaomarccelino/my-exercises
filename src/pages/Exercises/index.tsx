import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ExerciseCard from "../../components/ExerciseCard";
import { groupA, groupB, groupC} from "../../utils/exercises";
import './style.css'
const Exercises = () => {
  const [weight, setWeight] = useState()
  const { group } = useParams();
  const definedGroup = () => {
    if (group === "a") {
      return groupA
    } else if (group === "b") {
      return groupB
    } else if (group === "c") {
      return groupC
    } else {
      return [];
    }
  }
  const [chosenGroup, setChosenGroup] = useState(definedGroup)
  
  return (
    <div className="exercises-area container">
      <Link className="back-btn" to="/">Inicio</Link>
      <h1>{`Grupo ${group}`}</h1>
      {
        chosenGroup.map((g, index) => {
          return (
            <ExerciseCard {...g} cardIndex={index} />
          )
        })
      }
    </div>
  )
}

export default Exercises;
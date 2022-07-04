import { useState } from "react";
import { ButtonStyled } from "../style/style";

//Composant avec checkbox permettant de barrer une fois checker
const Task = ({ task, deleteTodo }) => {
  //etat de check
  const [check, setCheck] = useState(false);

  return (
    <>
      {/*ce qui permet de faire que ça soit barrer*/}
      <div
        key={task.id}
        style={{ textDecorationLine: check && "line-through" }}
      >
        <input type="checkbox" onChange={() => setCheck(!check)} />
        {task.content} {/*bouton qui permet de delete la tache*/}
        <ButtonStyled onClick={() => deleteTodo(task.id)}>X</ButtonStyled>
      </div>
    </>
  );
};

export default Task;

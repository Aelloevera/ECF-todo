import { useState } from "react";
import Task from "./Task";
import { ButtonStyled, ToDoStyle } from "../style/style";

const ToDo = () => {
  //Tableau todo
  const [todos, setTodos] = useState([]);
  //valeur input
  const [valeur, setValeur] = useState("");

  //function changement état
  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prevstate) => [
      ...prevstate,
      { id: Math.floor(Math.random() * 100), content: valeur },
    ]);
    setValeur("");
  }

  //Function pour delete un todo

  function deleteTodo(id) {
    let deleted = todos.filter((todo) => todo.id !== id);
    setTodos(deleted);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={valeur}
          placeholder="Nouvelle tâche"
          onChange={(e) => setValeur(e.target.value)}
        />
        <ButtonStyled type="submit">+</ButtonStyled>
      </form>
      <ToDoStyle>
        {todos.map((todo) => (
          <Task key={todo.id} task={todo} deleteTodo={deleteTodo} />
        ))}
      </ToDoStyle>
    </>
  );
};
export default ToDo;

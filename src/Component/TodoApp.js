import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const TodoApp = () => {
  const [todo, setTodo] = useState([]);

  //solve 1
  //   const addTodoHandler = (input) => {
  //     const newTodo = {
  //       id: Math.floor(Math.random() * 1000),
  //       text: input,
  //       isCompleted: false,
  //     };
  //     setTodo([...todo, newTodo]);
  //   };

  const completeTodo = (id) => {
    console.log(id);
  };

  return (
    <div>
      {/* //solve 1 */}
      {/* <TodoForm addTodoHandler={addTodoHandler} /> */}

      {/* solve2 */}
      <TodoForm setTodo={setTodo} todo={todo} />
      <br></br>
      <TodoList todos={todo} onComplete={completeTodo} />
    </div>
  );
};

export default TodoApp;

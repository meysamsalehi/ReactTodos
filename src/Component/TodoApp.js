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

  return (
    <div>
      {/* //solve 1 */}
      {/* <TodoForm addTodoHandler={addTodoHandler} /> */}

      
      {/* solve2 */}
      <TodoForm setTodo={setTodo} todo={todo} />

      <TodoList />
    </div>
  );
};

export default TodoApp;

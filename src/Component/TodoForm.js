import { useState } from "react";

const TodoForm = ({ todo, setTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const todoHandler = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("enter todo");
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
      isCompleted: false,
    };
    setTodo([...todo, newTodo]);
    setInputValue("");
  };

  return (
    <form
      className="flex justify-center align-items mt-10"
      onSubmit={submitHandler}
    >
      <h1>salam</h1>
      <input
        type="text"
        value={inputValue}
        onChange={todoHandler}
        className="bg-slate-100"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        onClick={submitHandler}
        type="submit"
      >
        add
      </button>

      <h2>{inputValue}</h2>
    </form>
  );
};

export default TodoForm;

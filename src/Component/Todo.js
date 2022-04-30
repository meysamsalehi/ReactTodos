const Todo = ({ todo, onComplete }) => {
  return (
    <div className="flex justify-center align-items ">
      <div key={todo.id}>{todo.text}</div>
      <button className="btn bg-red-400  ml-5 rounded px-3">edit</button>
      <button
        onClick={() => onComplete(todo.id)}
        className="btn bg-green-500 ml-5 rounded px-3 "
      >
        complete
      </button>
    </div>
  );
};

export default Todo;

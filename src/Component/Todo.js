const Todo = ({ todo }) => {
  return (
    <>
      <div key={todo.id}>{todo.text}</div>
      <div>
        <button>edit</button>
        <button>complete</button>
      </div>
    </>
  );
};

export default Todo;

import Todo from "./Todo";

const TodoList = ({ todos, onComplete, onRemove }) => {
  const renderedList = () => {
    if (todos.length === 0) return <div>add some one to</div>;

    return todos.map((todo) => {
      return (
        <>
          <Todo
            key={todo.id}
            todo={todo}
            onComplete={onComplete}
            onRemove={onRemove}
          />
        </>
      );
    });
  };

  return <div>{renderedList()}</div>;
};

export default TodoList;

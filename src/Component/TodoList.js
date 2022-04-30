import Todo from "./Todo";

const TodoList = ({ todos }) => {
  const renderedList = () => {
    if (todos.length === 0) return <div>add some one to</div>;

    return todos.map((todo) => {
      return (
        <>
          <Todo key={todo.id} todo={todo} />
        </>
      );
    });
  };

  return <div>{renderedList()}</div>;
};

export default TodoList;

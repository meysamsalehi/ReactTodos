import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./Component/TodoForm";
import TodoApp from "./Component/TodoApp";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl bg-slate-900 font-bold underline ">
        Hello world!
      </h1>
      <TodoApp />
    </div>
  );
}

export default App;

import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems1 from "./Components/TodoItems1";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      duedate: "13/03/2024",
    },
    {
      name: "Go to College",
      duedate: "13/03/2024",
    },
    {
      name: "Like This video",
      duedate: "13/03/2024",
    },
  ];
  return (
    <center classNameName="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems1 todoItems={todoItems}></TodoItems1>
    </center>
  );
}

export default App;

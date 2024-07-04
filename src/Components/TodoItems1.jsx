import TodoItem from "./TodoItem";
import styles from "./AppName.module.css";
const TodoItems1 = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems1;

import {useState} from "react";
import {useTodoStore} from "../store/useTodoStore";

const TodoList = () => {
  const [todoValue, setTodoValue] = useState('');
  const {todos, addTodo, deleteTodo, completeTodo} = useTodoStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoValue);
    setTodoValue('');
  };

  return (
    <>
      <h3>Todo App</h3>
      <form onSubmit={handleSubmit}>
        <input
          type={'text'}
          value={todoValue}
          id={'new-todo'}
          name={'newTodo'}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type={'submit'}>Add</button>
      </form>
      <br/>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{textDecoration: todo.isCompleted ? "line-through" : "unset"}}>
              {todo.text}{" "}
            </span>
            {!todo.isCompleted ? <button onClick={() => completeTodo(todo.id)}>✅</button> : null}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
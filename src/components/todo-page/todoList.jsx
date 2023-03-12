import { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItems from "./todoItems";
import TodoButtons from "./todoBtns";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList);

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todoList))
  },[todoList])
  return (
    <>
      {todoList.map((elem) => (
        <div className="d-flex" key={elem.id}>
          <TodoItems elem={elem} />
          <TodoButtons elem={elem} />
        </div>
      ))}
    </>
  );
};
export default TodoList;

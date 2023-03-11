import { useSelector } from "react-redux";
import TodoElems from "./todoElems";
import TodoButtons from "./todoBtns";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList);

  return (
    <>
      {todoList.map((elem) => (
        <div className="d-flex" key={elem.id}>
          <TodoElems elem={elem} />
          <TodoButtons elem={elem} />
        </div>
      ))}
    </>
  );
};
export default TodoList;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../../store/slices/todoSlice";
import FormFields from "./formFields";
import Form from "react-bootstrap/Form";

const UpdateTodoForm = () => {
  const chosenTodo = useSelector((state)=> state.todo.currentTodo);
  const initialState = {
    id: chosenTodo.id,
    title: "",
    desc: "",
    hasCompleted: false,
  };
  const [todo, setTodo] = useState(initialState);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTodo(todo))
    setTodo(initialState);
  };

  return (
    <Form className="w-100 mx-auto" onSubmit={handleSubmit}>
      <h2>Обновить заметку заметку {chosenTodo.id}</h2>
      <FormFields 
        todo={todo} 
        setTodo = {setTodo}
        />
    </Form>
  );
};

export default UpdateTodoForm;

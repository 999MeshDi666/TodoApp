import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todoSlice";
import FormFields from "./formFields";
import Form from "react-bootstrap/Form";
import uuid from 'react-uuid';

const AddTodoForm = () => {
  const initialState = {
    id: uuid().slice(0, 4),
    title: "",
    desc: "",
    hasCompleted: false,
  };
  const [todo, setTodo] = useState(initialState);
  const dispatch = useDispatch();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(todo));
    setTodo(initialState);
  };
  return (
    <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
      <h2>Добавить новою заметку</h2>
      <FormFields 
        todo={todo} 
        setTodo = {setTodo}
      />
    </Form>
  );
};
export default AddTodoForm;

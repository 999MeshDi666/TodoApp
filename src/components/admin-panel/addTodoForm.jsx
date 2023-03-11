import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTodo } from "../../store/slices/todoSlice";
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
  const handleChangeTodo = (event) => {
    const value =
      event.target.name != "hasCompleted"
        ? event.target.value
        : event.target.checked;
    setTodo({
      ...todo,
      [event.target.name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(todo));
    setTodo(initialState);
  };
  return (
    <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
      <h2>Добавить новою заметку</h2>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Заголовок</Form.Label>
        <Form.Control
          name="title"
          type="text"
          placeholder="Заголовок"
          value={todo.title}
          onChange={handleChangeTodo}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDesc">
        <Form.Label>Описание</Form.Label>
        <Form.Control
          name="desc"
          type="text"
          placeholder="Описание"
          value={todo.desc}
          onChange={handleChangeTodo}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formhasCompleted">
        <Form.Check
          name="hasCompleted"
          type="checkbox"
          label="Пометить заметку выполненой"
          checked = {todo.hasCompleted}
          onChange={handleChangeTodo}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  );
};
export default AddTodoForm;

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const FormFields = ({todo, setTodo}) => {

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
  return (

    <>
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
          checked={todo.hasCompleted}
          onChange={handleChangeTodo}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Подтвердить
      </Button>
    </>
  );
};

export default FormFields;
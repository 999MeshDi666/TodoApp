import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../store/slices/todoSlice";
import { modalConfirmRemove } from "../../store/slices/modalSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const RemoveModal = () => {
  const show = useSelector((state) => state.modal.removeValue);
  const chosenTodo = useSelector((state) => state.todo.currentTodo);
  const dispatch = useDispatch();
  const handleRemoveTodo = () => {
    dispatch(removeTodo(chosenTodo.id));
    dispatch(modalConfirmRemove());
  };
  const handleShowModal = () => {
    dispatch(modalConfirmRemove());
  };
  return (
    <Modal show={show} onHide={handleShowModal} backdrop="static">
      <Modal.Header>
        <Modal.Title>Удаление заметки</Modal.Title>
      </Modal.Header>
      <Modal.Body>Вы действительно хотите удалить заметку?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleShowModal}>
          Закрыть
        </Button>
        <Button variant="danger" onClick={handleRemoveTodo}>
          Подтвердить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default RemoveModal;

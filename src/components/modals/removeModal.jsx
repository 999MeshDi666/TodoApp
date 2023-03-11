import { removeTodo } from "../../store/slices/todoSlice";
import { modalConfirmRemove } from "../../store/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
const RemoveModal = ({elem}) => {

 const show = useSelector((state) => state.modal.removeValue)
  const dispatch = useDispatch();
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
    dispatch(modalConfirmRemove());
  };
  const handleShowModal = () =>{
    dispatch(modalConfirmRemove());
  }
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
        <Button variant="danger" onClick={() => handleRemoveTodo(elem.id)}>
          Подтвердить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default RemoveModal;

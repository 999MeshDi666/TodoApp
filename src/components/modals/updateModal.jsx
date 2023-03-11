import { modalUpdateTodo } from "../../store/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UpdateModal = () => {
  const show = useSelector((state) => state.modal.updateValue);
  const dispatch = useDispatch();
  const handleShowModal = () => {
    dispatch(modalUpdateTodo());
  };
  return (
    <Modal show={show} onHide={handleShowModal} backdrop="static">
      <Modal.Header>
        <Modal.Title>Обновить заметку</Modal.Title>
      </Modal.Header>
      <Modal.Body>
                
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleShowModal}>
          Закрыть
        </Button>
       
      </Modal.Footer>
    </Modal>
  );
};
export default UpdateModal;

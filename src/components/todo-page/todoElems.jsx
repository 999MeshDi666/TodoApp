import { modalUpdateTodo } from "../../store/slices/modalSlice";
import { useDispatch } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import UpdateModal from "../modals/updateModal";
const TodoElems = ({ elem }) => {
  const dispatch = useDispatch();
  const handleShowModal = () => {
    dispatch(modalUpdateTodo());
  };
  return (
    <>
      <ListGroup className="w-100" onClick={handleShowModal}>
        <ListGroup.Item>
          <h6 className={`my-1 ${elem.hasCompleted ? "done" : ""}`}>
            Название: {elem.title}
          </h6>
          <p className={`my-1 ${elem.hasCompleted ? "done" : ""}`}>
            Описание: {elem.desc}
          </p>
        </ListGroup.Item>
      </ListGroup>
      <UpdateModal/>
    </>
  );
};

export default TodoElems;

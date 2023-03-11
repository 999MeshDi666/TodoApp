import { modalUpdateTodo } from "../../store/slices/modalSlice";
import { setCurrentTodo } from "../../store/slices/todoSlice";
import { useDispatch } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import UpdateModal from "../modals/updateModal";


const TodoItems = ({ elem }) => {
  const dispatch = useDispatch();
 
  const handleShowModal = (elem) => {
    dispatch(modalUpdateTodo());
    dispatch(setCurrentTodo(elem))
  };
  
  return (
    <>
      <ListGroup className="list-items w-100" onClick={()=>handleShowModal(elem)}>
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

export default TodoItems;

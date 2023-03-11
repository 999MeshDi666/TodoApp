import { completeTodo } from "../../store/slices/todoSlice";
import {  modalConfirmRemove} from "../../store/slices/modalSlice";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import RemoveModal from "../modals/removeModal";
const TodoButtons = ({ elem }) => {

  const dispatch = useDispatch();
  const handleShowModal = () =>{
    dispatch(modalConfirmRemove());
  }
 
  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  };
  return (
    <>
        <ButtonGroup aria-label="Basic example">
            <Button
                className="todo-btn"
                variant="success"
                onClick={() => handleCompleteTodo(elem.id)}
            >
                {elem.hasCompleted ? "Uncomplete" : "Complete"}
            </Button>
            <Button
                className="todo-btn"
                variant="danger"
                onClick={handleShowModal}
            >
                Delete
            </Button>
            
        </ButtonGroup>
        <RemoveModal elem={elem}/>
    </>
    
  );
};
export default TodoButtons;

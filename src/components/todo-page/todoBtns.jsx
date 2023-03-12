import { completeTodo, setCurrentTodo } from "../../store/slices/todoSlice";
import { modalConfirmRemove } from "../../store/slices/modalSlice";
import { useDispatch } from "react-redux";
import RemoveModal from "../modals/removeModal";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const TodoButtons = ({ elem }) => {
  
  const dispatch = useDispatch();
  const handleShowModal = (elem) =>{
    dispatch(modalConfirmRemove());
    dispatch(setCurrentTodo(elem))
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
                onClick={()=>handleShowModal(elem)}
            >
                Delete
            </Button>
            
        </ButtonGroup>
        <RemoveModal/>
    </>
    
  );
};
export default TodoButtons;

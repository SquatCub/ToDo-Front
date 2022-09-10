import { useContext, useState } from "react";
import TodoContext from "../../utils/context/todo-context";
import TodoModal from "../TodoModal/TodoModal";

const NewTodoButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const ctx = useContext(TodoContext);

  const onToggleModal = () => {
    setOpenModal((openModal) => !openModal);
    ctx.refresh();
  };

  return (
    <div>
      {openModal && (
        <TodoModal
          title="New To-Do"
          description="Create a new To-do task"
          onToggleModal={onToggleModal}
        />
      )}
      <button className="btn btn-success mt-2 mb-2" onClick={onToggleModal}>
        + New To Do
      </button>
    </div>
  );
};

export default NewTodoButton;

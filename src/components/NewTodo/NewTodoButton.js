import { useState } from "react";
import NewTodoModal from "./NewTodoModal";

const NewTodoButton = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const onToggleModal = () => {
    setOpenModal((openModal) => !openModal);
    props.refresh();
  };

  return (
    <div>
      {openModal && (
        <NewTodoModal
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

import { useContext, useState } from "react";
import TodoModal from "../TodoModal/TodoModal";
import { getIfDone, getTodoStatus } from "../../utils/functions/todo-item";
import {
  deleteTodo,
  updateTodoAsDoneUndone,
} from "../../utils/services/TodosServices";
import TodoContext from "../../utils/context/todo-context";
import ItemContext from "../../utils/context/item-context";

const TodoItem = () => {
  const [openModal, setOpenModal] = useState(false);
  const ctx = useContext(TodoContext);
  const ctxItem = useContext(ItemContext);

  const onToggleModal = () => {
    setOpenModal((openModal) => !openModal);
    ctx.refresh();
  };

  const onDeleteTodo = () => {
    deleteTodo(ctxItem.item.id).then((res) => {
      if (res.code !== 200) alert("Todo not deleted");
      ctx.refresh();
    });
  };

  const doneUndoneHandler = () => {
    const option = ctxItem.item.done ? "undone" : "done";
    updateTodoAsDoneUndone(ctxItem.item.id, option).then((res) => {
      if (res.code !== 200) alert("Todo not updated");
      ctx.refresh();
    });
  };

  return (
    <>
      {openModal && (
        <TodoModal
          title="Edit To-Do"
          description="Update To-do task"
          onToggleModal={onToggleModal}
        />
      )}
      <tr
        className={`${getTodoStatus(
          ctxItem.item.due_date,
          ctxItem.item.done
        )} ${getIfDone(ctxItem.item.done)}`}
      >
        <th scope="row">
          <input
            className="form-check-input"
            type="checkbox"
            checked={ctxItem.item.done ? true : false}
            onChange={doneUndoneHandler}
          />
        </th>
        <td>{ctxItem.item.name}</td>
        <td>
          {ctxItem.item.priority.substring(0, 1) +
            ctxItem.item.priority
              .substring(1, ctxItem.item.priority.length)
              .toLowerCase()}
        </td>
        <td>{ctxItem.item.due_date}</td>
        <td>
          <button className="btn btn-warning" onClick={onToggleModal}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={onDeleteTodo}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default TodoItem;

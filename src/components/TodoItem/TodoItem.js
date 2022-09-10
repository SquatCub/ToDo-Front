import { useContext, useState } from "react";
import NewTodoModal from "../NewTodo/TodoModal";
import {
  deleteTodo,
  updateTodoAsDoneUndone,
} from "../../utils/services/TodosServices";
import TodoContext from "../../utils/context/todo-context";

const TodoItem = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);
  const ctx = useContext(TodoContext);

  const onToggleModal = () => {
    setOpenModal((openModal) => !openModal);
    ctx.refresh();
  };

  const deleteT = () => {
    deleteTodo(item.id).then((res) => {
      if (res.code === 200) alert("Todo deleted");
      else alert("Todo not deleted");
      ctx.refresh();
    });
  };

  const getTodoStatus = () => {
    if (item.due_date && !item.done) {
      const today = new Date();
      const dueDate = new Date(item.due_date);
      const difference = dueDate.getTime() - today.getTime();
      const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
      if (totalDays <= 7) return "table-danger";
      else if (totalDays <= 14 && totalDays > 7) return "table-warning";
      else if (totalDays > 14) return "table-success";
    }
    return "";
  };

  const doneUndoneHandler = () => {
    const option = item.done ? "undone" : "done";
    updateTodoAsDoneUndone(item.id, option).then((res) => {
      if (res.code === 200) alert(`Todo marked as ${option}`);
      else alert("Todo not updated");
      ctx.refresh();
    });
  };

  const getIfDone = () => {
    if (item.done) return "fw-bold";
    return "";
  };
  return (
    <>
      {openModal && (
        <NewTodoModal
          title="Edit To-Do"
          description="Update To-do task"
          onToggleModal={onToggleModal}
          item={item}
        />
      )}
      <tr className={`${getTodoStatus()} ${getIfDone()}`}>
        <th scope="row">
          <input
            className="form-check-input"
            type="checkbox"
            checked={item.done ? true : false}
            onChange={doneUndoneHandler}
          />
        </th>
        <td>{item.name}</td>
        <td>
          {item.priority.substring(0, 1) +
            item.priority.substring(1, item.priority.length).toLowerCase()}
        </td>
        <td>{item.due_date}</td>
        <td>
          <button className="btn btn-warning" onClick={onToggleModal}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={deleteT}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default TodoItem;

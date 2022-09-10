import { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoContext from "../../utils/context/todo-context";
const TodoList = (props) => {
  const ctx = useContext(TodoContext);
  return (
    <div>
      <table className="table border">
        <thead>
          <tr>
            <th scope="col">Done</th>
            <th scope="col">Name</th>
            <th scope="col">
              Priority{" "}
              <button
                className="btn btn-sm"
                onClick={() =>
                  props.dispatchOrder({
                    type: "PRIORITY",
                    val: props.orderBy.orderByPriority,
                  })
                }
              >
                {props.orderBy.orderByPriority === ""
                  ? "<>"
                  : props.orderBy.orderByPriority === "true"
                  ? "v"
                  : "^"}
              </button>
            </th>
            <th scope="col">
              Due Date{" "}
              <button
                className="btn btn-sm"
                onClick={() =>
                  props.dispatchOrder({
                    type: "DATE",
                    val: props.orderBy.orderByDueDate,
                  })
                }
              >
                {props.orderBy.orderByDueDate === ""
                  ? "<>"
                  : props.orderBy.orderByDueDate === "true"
                  ? "v"
                  : "^"}
              </button>
            </th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ctx.items.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })}
        </tbody>
      </table>
      {ctx.items.length === 0 && (
        <div className="text-center mb-5">No data</div>
      )}
    </div>
  );
};

export default TodoList;

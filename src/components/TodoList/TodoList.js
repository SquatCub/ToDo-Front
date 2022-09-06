import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
  return (
    <div>
      <table className="table border">
        <thead>
          <tr>
            <th scope="col">
              <input className="form-check-input" type="checkbox" />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Priority</th>
            <th scope="col">Due Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => {
            return <TodoItem item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;

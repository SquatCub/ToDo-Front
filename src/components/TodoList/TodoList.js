import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
  return (
    <div>
      <table className="table border">
        <thead>
          <tr>
            <th scope="col">Done</th>
            <th scope="col">Name</th>
            <th scope="col">Priority</th>
            <th scope="col">Due Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })}
        </tbody>
      </table>
      {props.items.length == 0 && (
        <div className="text-center mb-5">No data</div>
      )}
    </div>
  );
};

export default TodoList;

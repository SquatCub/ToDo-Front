const TodoItem = ({ item }) => {
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
  const getIfDone = () => {
    if (item.done) return "fw-bold";
    return "";
  };
  return (
    <tr className={`${getTodoStatus()} ${getIfDone()}`}>
      <th scope="row">
        <input
          className="form-check-input"
          type="checkbox"
          checked={item.done ? true : false}
        />
      </th>
      <td>{item.text}</td>
      <td>{item.priority}</td>
      <td>{item.due_date}</td>
      <td>
        <button className="btn btn-warning">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};
export default TodoItem;

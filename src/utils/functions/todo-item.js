export const getIfDone = (done) => {
  if (done) return "fw-bold";
  return "";
};

export const getTodoStatus = (due_date, done) => {
  if (due_date && !done) {
    const today = new Date();
    const dueDate = new Date(due_date);
    const difference = dueDate.getTime() - today.getTime();
    const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    if (totalDays <= 7) return "table-danger";
    else if (totalDays <= 14 && totalDays > 7) return "table-warning";
    else if (totalDays > 14) return "table-success";
  }
  return "";
};

export const orderReducer = (state, action) => {
  const orderState =
    action.val === "" ? "true" : action.val === "true" ? "false" : "";

  if (action.type === "PRIORITY") {
    return {
      orderByPriority: orderState,
      orderByDueDate: state.orderByDueDate,
      orderByPriorityAndDueDate: "",
      orderByDueDateAndPriority:
        state.orderByDueDate !== "" && orderState !== "" ? "true" : "",
    };
  }
  if (action.type === "DATE") {
    return {
      orderByPriority: state.orderByPriority,
      orderByDueDate: orderState,
      orderByPriorityAndDueDate:
        state.orderByPriority !== "" && orderState !== "" ? "true" : "",
      orderByDueDateAndPriority: "",
    };
  }
};

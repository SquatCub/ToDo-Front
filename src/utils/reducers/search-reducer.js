export const searchReducer = (state, action) => {
  if (action.type === "INPUT_NAME") {
    return {
      nameInput: action.val,
      priorityInput: state.priorityInput,
      stateInput: state.stateInput,
    };
  }
  if (action.type === "INPUT_PRIORITY") {
    return {
      nameInput: state.nameInput,
      priorityInput: action.val,
      stateInput: state.stateInput,
    };
  }
  if (action.type === "INPUT_STATE") {
    return {
      nameInput: state.nameInput,
      priorityInput: state.priorityInput,
      stateInput: action.val,
    };
  }
  return { nameInput: "", priorityInput: "", stateInput: "" };
};

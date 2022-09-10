export const inputReducer = (state, action) => {
  if (action.type === "INPUT_NAME") {
    return {
      value: action.val,
      isValid: action.val.length > 0 && action.val.length < 120,
    };
  }
  if (action.type === "INPUT_DATE") {
    return { value: action.val, isValid: new Date(action.val) > new Date() };
  }
  return { value: "", isValid: true };
};

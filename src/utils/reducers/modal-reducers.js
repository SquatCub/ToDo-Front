export const inputReducer = (state, action) => {
  if (action.type === "INPUT_NAME") {
    return {
      value: action.val,
      isValid: action.val.length > 0 && action.val.length < 120,
    };
  }
  if (action.type === "INPUT_DATE") {
    const datenew = new Date(action.val);
    datenew.setDate(datenew.getDate() + 1);
    return { value: action.val, isValid: datenew >= new Date() };
  }
  return { value: "", isValid: true };
};

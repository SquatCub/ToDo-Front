import { useEffect, useState, useReducer } from "react";
import { inputReducer } from "../../utils/reducers/modalReducers";
import { createTodo } from "../../services/TodosServices";

export const Modal = (props) => {
  const [nameState, dispatchName] = useReducer(inputReducer, {
    value: props.item ? props.item.name : "",
    isValid: null,
  });
  const [dateState, dispatchDate] = useReducer(inputReducer, {
    value: props.item ? props.item.dueDate : "",
    isValid: true,
  });
  const [priority, setPriority] = useState("All");
  const [formIsValid, setFormIsValid] = useState(false);
  const [todoIsCreated, setTodoIsCreated] = useState(null);

  const nameChangeHandler = (event) => {
    dispatchName({ type: "INPUT_NAME", val: event.target.value });
  };
  const dateChangeHandler = (event) => {
    dispatchDate({ type: "INPUT_DATE", val: event.target.value });
  };
  const priorityChangeHandler = (event) => {
    setPriority(event.target.value);
  };
  const clearDateHandler = () => {
    dispatchDate({});
  };

  const { isValid: nameIsValid } = nameState;
  const { isValid: dateIsValid } = dateState;
  useEffect(() => {
    setFormIsValid(nameIsValid && dateIsValid);
  }, [nameIsValid, dateIsValid]);

  const submitForm = (e) => {
    e.preventDefault();
    createTodo({
      name: nameState.value,
      due_date: dateState.value,
      priority: priority,
    }).then((data) => {
      if (data.code === 200) setTodoIsCreated(true);
      if (data.code === 400) setTodoIsCreated(false);
    });
  };

  return (
    <form onSubmit={submitForm} className={props.classes.modal}>
      <header className={`${props.classes.header} bg-success`}>
        <h2 className="text-white">{props.title}</h2>
      </header>
      <div className={props.classes.content}>
        <p>{props.description}</p>
        <label>Name </label>
        <input
          aria-describedby="invalidName"
          className={`form-control ${
            nameState.isValid === false ? "is-invalid" : ""
          }`}
          type={"text"}
          placeholder="Enter to-do name"
          value={nameState.value}
          onChange={nameChangeHandler}
        />
        {nameState.isValid === false && (
          <div className="invalid-feedback">
            To-do must have a name or length is greater than 120 chars.
          </div>
        )}
        <br />
        <label>Due date (optional) </label>
        <input
          className={`form-control ${
            dateState.isValid === false ? "is-invalid" : ""
          }`}
          type={"date"}
          value={dateState.value}
          onChange={dateChangeHandler}
        />
        {dateState.isValid === false && (
          <div className="invalid-feedback">Date must be before today.</div>
        )}
        <button
          type={"button"}
          className="btn btn-sm"
          onClick={clearDateHandler}
        >
          Clear date
        </button>
        <br />
        <label>Priority </label>
        <select
          className="form-select"
          defaultValue={props.item ? props.item.priority : priority}
          onChange={priorityChangeHandler}
        >
          <option key={"Low"} value={"Low"}>
            {"Low"}
          </option>
          <option key={"Medium"} value={"Medium"}>
            {"Medium"}
          </option>
          <option key={"High"} value={"High"}>
            {"High"}
          </option>
        </select>
      </div>
      <footer className={props.classes.actions}>
        <button
          type={"button"}
          className="btn btn-secondary"
          onClick={props.onToggleModal}
        >
          Close
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formIsValid}
        >
          Save
        </button>
      </footer>
      <div className={props.classes.actions}>
        {todoIsCreated === true && (
          <span className="text-success">To-do created successfully.</span>
        )}
        {todoIsCreated === false && (
          <span className="text-danger">To-do was not created.</span>
        )}
      </div>
    </form>
  );
};

import { useEffect, useState, useReducer, useContext } from "react";
import ItemContext from "../../utils/context/item-context";
import { inputReducer } from "../../utils/reducers/modal-reducers";
import { createTodo, updateTodo } from "../../utils/services/TodosServices";

export const Modal = (props) => {
  const ctxItem = useContext(ItemContext);
  const [priority, setPriority] = useState(
    ctxItem.item ? ctxItem.item.priority : "LOW"
  );
  const [formIsValid, setFormIsValid] = useState(false);
  const [todoIsSaved, setTodoIsSaved] = useState(null);
  const [nameState, dispatchName] = useReducer(inputReducer, {
    value: ctxItem.item ? ctxItem.item.name : "",
    isValid: ctxItem.item ? true : null,
  });
  const [dateState, dispatchDate] = useReducer(inputReducer, {
    value: ctxItem.item
      ? ctxItem.item.due_date != null
        ? ctxItem.item.due_date
        : ""
      : "",
    isValid: true,
  });

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

  useEffect(() => {
    if (setTodoIsSaved) setTodoIsSaved(null);
  }, [nameState, dateState, priority]);

  const submitForm = (e) => {
    e.preventDefault();
    let save;
    const todo = {
      name: nameState.value,
      due_date: dateState.value,
      priority: priority,
    };
    if (ctxItem.item) {
      save = updateTodo(todo, ctxItem.item.id);
    } else {
      save = createTodo(todo);
      dispatchDate({ type: "" });
      dispatchName({ type: "" });
      setPriority("LOW");
    }
    save.then((data) => {
      if (data.code === 200) setTodoIsSaved(true);
      if (data.code === 400) setTodoIsSaved(false);
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
          <div className="invalid-feedback">Date must be after today.</div>
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
          value={priority}
          onChange={priorityChangeHandler}
        >
          <option key={"Low"} value={"LOW"}>
            {"Low"}
          </option>
          <option key={"Medium"} value={"MEDIUM"}>
            {"Medium"}
          </option>
          <option key={"High"} value={"HIGH"}>
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
        {todoIsSaved === true && (
          <span className="text-success">
            To-do {ctxItem.item ? "updated" : "created"} successfully.
          </span>
        )}
        {todoIsSaved === false && (
          <span className="text-danger">
            To-do was not {ctxItem.item ? "updated" : "created"}.
          </span>
        )}
      </div>
    </form>
  );
};

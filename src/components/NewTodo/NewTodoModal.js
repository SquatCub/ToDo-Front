import React from "react";
import ReactDOM from "react-dom";
import classes from "./NewTodoModal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <header className={`${classes.header} bg-success`}>
        <h2 className="text-white">{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.description}</p>
        <label>Name </label>
        <input
          type={"text"}
          placeholder="Enter to-do name"
          value={props.item ? props.item.name : ""}
        />
        <br />
        <label>Due date (optional) </label>
        <input
          type={"date"}
          value={
            props.item ? `${props.item.due_date.replaceAll("/", "-")}` : ""
          }
        />
        <br />
        <label>Priority </label>
        <select defaultValue={props.item ? props.item.priority : 0}>
          <option key={"All"} value={"All"}>
            {"All"}
          </option>
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
      <footer className={classes.actions}>
        <button className="btn btn-secondary" onClick={props.onToggleModal}>
          Close
        </button>
        <button className="btn btn-primary">Save</button>
      </footer>
    </div>
  );
};

const NewTodoModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          description={props.description}
          item={props.item ? props.item : null}
          onToggleModal={props.onToggleModal}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default NewTodoModal;

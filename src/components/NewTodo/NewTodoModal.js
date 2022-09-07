import React from "react";
import ReactDOM from "react-dom";
import classes from "./NewTodoModal.module.css";
import { Backdrop } from "../Backdrop/Backdrop";
import { ModalOverlay } from "../../Modal/ModalOverlay";

const NewTodoModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop classes={classes} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          description={props.description}
          item={props.item ? props.item : null}
          onToggleModal={props.onToggleModal}
          classes={classes}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default NewTodoModal;

import React from "react";
import ReactDOM from "react-dom";

import Card from "../card/Card";
import Button from "../button/Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onOkButtonClick}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onOkButtonClick}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      { ReactDOM.createPortal(<Backdrop onOkButtonClick={props.onOkButtonClick}></Backdrop>, document.getElementById("backdrop-root"))}
      { ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onOkButtonClick={props.onOkButtonClick} ></ModalOverlay>, document.getElementById("overlay-root"))}
    </>
  );
};

export default ErrorModal;

import Backdrop from "../../UI/Backdrop";

import classes from "./Modal.module.css";

const DeleteModal = (props) => {
  const formSubmitHandler = () => {
    props.productDispatcher({ type: "delete", id: props.id });
    props.onCloseModal();
  };

  const formCancelHandler = () => {
    props.onCloseModal();
  };

  return (
    <Backdrop>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <p>
          Are you sure you want to <strong>DELETE</strong> {props.name}?
        </p>
        <div>
          <button type="submit">Submit</button>
          <button onClick={formCancelHandler}>Cancel</button>
        </div>
      </form>
    </Backdrop>
  );
};

export default DeleteModal;

import React, { useState, useEffect } from "react";

import Backdrop from "../../UI/Backdrop";

import classes from "./Modal.module.css";

const EditModal = (props) => {
  const [name, setName] = useState(props.name);
  const [imageUrl, setImageUrl] = useState(props.imageUrl);
  const [count, setCount] = useState(props.count);
  const [width, setWidth] = useState(props.size.width);
  const [height, setHeight] = useState(props.size.height);
  const [weight, setWeight] = useState(props.weight);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isImageUrlValid, setIsImageUrlValid] = useState(true);
  const [isCountValid, setIsCountValid] = useState(true);
  const [isWidthValid, setIsWidthValid] = useState(true);
  const [isHeightValid, setIsHeightValid] = useState(true);
  const [isWeightValid, setIsWeightValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    setIsFormValid(
      isNameValid &&
        isImageUrlValid &&
        isCountValid &&
        isWidthValid &&
        isHeightValid &&
        isWeightValid
    );
  }, [
    isNameValid,
    isImageUrlValid,
    isCountValid,
    isWidthValid,
    isHeightValid,
    isWeightValid,
  ]);

  const nameInputChangeHandler = (event) => {
    const value = event.target.value;
    setName(value);
    if (value.length > 0) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  };

  const imageUrlInputChangeHandler = (event) => {
    const value = event.target.value;
    setImageUrl(value);
    if (value.length > 0) {
      setIsImageUrlValid(true);
    } else {
      setIsImageUrlValid(false);
    }
  };

  const countInputChangeHandler = (event) => {
    const value = event.target.value;
    setCount(value);
    if (value > 0) {
      setIsCountValid(true);
    } else {
      setIsCountValid(false);
    }
  };

  const widthInputChangeHandler = (event) => {
    const value = event.target.value;
    setWidth(value);
    if (value > 0) {
      setIsWidthValid(true);
    } else {
      setIsWidthValid(false);
    }
  };

  const heightInputChangeHandler = (event) => {
    const value = event.target.value;
    setHeight(value);
    if (value > 0) {
      setIsHeightValid(true);
    } else {
      setIsHeightValid(false);
    }
  };

  const weightInputChangeHandler = (event) => {
    const value = event.target.value;
    setWeight(value);
    if (value.length > 0) {
      setIsWeightValid(true);
    } else {
      setIsWeightValid(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      alert("Your data is invalid!");
      return;
    }
    props.productDispatcher({
      type: "edit",
      id: props.id,
      editedProduct: {
        id: props.id,
        name: name,
        imageUrl: imageUrl,
        count: +count,
        size: { width: +width, height: +height },
        weight: weight,
      },
    });
    props.onCloseModal();
  };

  const formCancelHandler = () => {
    props.onCloseModal();
  };

  return (
    <Backdrop>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <label>name</label>
        <input onChange={nameInputChangeHandler} value={name}></input>
        <label>image url</label>
        <input onChange={imageUrlInputChangeHandler} value={imageUrl}></input>
        <label>count</label>
        <input
          type="number"
          onChange={countInputChangeHandler}
          value={count}
        ></input>
        <div>
          <input
            type="number"
            onChange={widthInputChangeHandler}
            value={width}
          ></input>
          <span>x</span>
          <input
            type="number"
            onChange={heightInputChangeHandler}
            value={height}
          ></input>
        </div>
        <label>weight</label>
        <input onChange={weightInputChangeHandler} value={weight}></input>
        <div>
          <button type="submit">Submit</button>
          <button onClick={formCancelHandler}>Cancel</button>
        </div>
      </form>
    </Backdrop>
  );
};

export default EditModal;

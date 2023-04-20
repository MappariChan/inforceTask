import React, { useState, useEffect } from "react";

import Backdrop from "../../UI/Backdrop";

import classes from "./Modal.module.css";

const AddModal = (props) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isImageUrlValid, setIsImageUrlValid] = useState(false);
  const [isCountValid, setIsCountValid] = useState(false);
  const [isWidthValid, setIsWidthValid] = useState(false);
  const [isHeightValid, setIsHeightValid] = useState(false);
  const [isWeightValid, setIsWeightValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

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
      alert("Your data is invalid");
      return;
    }
    props.productDispatcher({
      type: "add",
      product: {
        id: Math.random(),
        name: name,
        imageUrl: imageUrl,
        count: +count,
        size: { width: +width, height: +height },
        weight: weight,
        comments: [],
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

export default AddModal;

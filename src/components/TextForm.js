import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    if (text !== "") {
      setText(text.toUpperCase());
      props.setAlertText("Text Converted To Upper Case");
    } else {
      props.setAlertText("Its Empty Please Enter Something!");
    }
  };
  const handleLoClick = () => {
    if (text !== "") {
      setText(text.toLowerCase());
      props.setAlertText("Text Converted To Lower Case");
    } else {
      props.setAlertText("Its Empty Please Enter Something!");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearText = () => {
    if (text !== "") {
      setText("");
      props.setAlertText("Text Cleared");
    } else {
      props.setAlertText("Its Empty Please Enter Something!");
    }
  };
  const removeExtraSpace = () => {
    if (text !== "") {
      setText((prevText) => prevText.replace(/\s+/g, " "));
      props.setAlertText("Extra Spaces Removed");
    } else {
      props.setAlertText("Its Empty Please Enter Something!");
    }
  };
  const [text, setText] = useState("");
  let wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const textAquaStyle = {
    backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "dark" ? "Aqua" : "black",
  };

  return (
    <>
      <div className="container py-3">
        <h1 style={textAquaStyle}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            onChange={handleOnChange}
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            style={textAquaStyle}
          ></textarea>
          <br />
          <button className="btn btn-primary my-2 " onClick={handleUpClick}>
            Convert To UpperCase
          </button>
          <button
            className="btn btn-secondary mx-2 my-2"
            onClick={handleLoClick}
          >
            Convert To LowerCase
          </button>
          <button className="btn btn-danger mx-2" onClick={handleClearText}>
            Clear Text
          </button>
          <button className="btn btn-success " onClick={removeExtraSpace}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-3" style={textAquaStyle}>
        <h1>Your Text Summary </h1>
        <b className="mx-2 border px-2 ">Words ={wordCount}</b>
        <b className="mx-2 border px-2 ">Characters={text.length}</b>
        <b className="mx-2 border px-2 ">
          Reading Time= {0.008 * wordCount} Minutes
        </b>
        <h2 className="py-2">Preview</h2>
        <p style={textAquaStyle}>{text}</p>
      </div>
    </>
  );
}

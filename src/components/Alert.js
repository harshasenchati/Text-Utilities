import React from "react";

export default function Alert(props) {
  if (!props.alertText) return null;
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show text-end py-2  "
        role="alert"
        style={props.alertStyle}
      >
        <strong>{props.alertText}</strong>
        <button
          type="button"
          className="btn-close px-3 py-2"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => props.setAlertText("")}
        ></button>
      </div>
    </>
  );
}

import React from "react";

export default function Alert(props) {
  if (!props.alertText) return null;
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{props.alertText}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => props.setAlertText("")}
        ></button>
      </div>
    </>
  );
}

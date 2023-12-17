import React from "react";
import "./styles.css";
export default function InputFeild() {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a task" className="input__box" />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
}

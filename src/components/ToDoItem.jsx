import React, { useState } from "react";
import EditableRow from "./EditableRow";

function ToDoItem(props) {
  const [isMarked, setIsMarked] = useState(false);

  function handleMark() {
    setIsMarked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="form">
      <li
        onClick={handleMark}
        style={{ textDecoration: isMarked ? "line-through" : "none" }}
      >
        {props.text}{" "}
        <button
          className="btn"
          onClick={() => {
            props.onEdit(props.id);
          }}
        >
          Edit
        </button>{" "}
        <button
          className="btn"
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default ToDoItem;

import React, { useState } from "react";

function ToDoItem(props) {
  const [isMarked, setIsMarked] = useState(false);

  function handleMark(props) {
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
            props.onEdit(props.id, props.text);
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

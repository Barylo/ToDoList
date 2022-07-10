import React, { useState } from "react";

function ToDoItem({
  setTodoEditing,
  setEditingText,
  setItems,
  setCountDeleted,
  countDeleted,
  id,
  text,
}) {
  const [isMarked, setIsMarked] = useState(false);

  function handleMark() {
    setIsMarked((prevValue) => {
      return !prevValue;
    });
  }

  function handleEdit(id, text) {
    setTodoEditing(id);
    setEditingText(text);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return updatedItems;
    });

    setCountDeleted(countDeleted + 1);
  }

  return (
    <div className="form">
      <li
        onClick={handleMark}
        style={{ textDecoration: isMarked ? "line-through" : "none" }}
      >
        {text}{" "}
        <button
          className="btn"
          onClick={() => {
            handleEdit(id, text);
          }}
        >
          Edit
        </button>{" "}
        <button
          className="btn"
          onClick={() => {
            deleteItem(id);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default ToDoItem;

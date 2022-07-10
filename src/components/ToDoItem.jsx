import React, { useState } from "react";
import Button from "./UI/Button/Button";

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
        <Button
          onClick={() => {
            handleEdit(id, text);
          }}
        >
          Edit
        </Button>{" "}
        <Button
          onClick={() => {
            deleteItem(id);
          }}
        >
          Delete
        </Button>
      </li>
    </div>
  );
}

export default ToDoItem;

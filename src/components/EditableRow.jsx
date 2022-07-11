import React from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./UI/Button/Button";
import styles from "./ToDoInput/ToDoInput.module.css";

function EditableRow({
  setTodoEditing,
  setItems,
  editingText,
  setEditingText,
  setCountEdited,
  countEdited,
  id,
}) {
  function handleCancelClick() {
    setTodoEditing(null);
  }

  function handleSaveEdited(id) {
    const editArr = (prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return updatedItems;
    };
    setItems(editArr);

    setItems((editArr) => {
      const editTodo = [...editArr];
      editTodo.unshift({
        id: uuidv4(),
        text: editingText.slice(0, 24),
        backgroundColor: `${
          "#" + Math.floor(Math.random() * 16777215).toString(16)
        }`,
      });
      return editTodo;
    });

    setTodoEditing(null);
    setCountEdited(countEdited + 1);
  }

  return (
    <div className={styles.form}>
      <input
        type="text"
        onChange={(e) => setEditingText(e.target.value)}
        value={editingText}
        id={id}
      />{" "}
      <Button onClick={() => handleSaveEdited(id)}>Save</Button>{" "}
      <Button type="button" onClick={() => handleCancelClick(id)}>
        Cancel
      </Button>
    </div>
  );
}

export default EditableRow;

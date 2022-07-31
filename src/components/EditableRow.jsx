import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./UI/Button/Button";
import styles from "./ToDoInput/ToDoInput.module.css";
import { useDispatch } from "react-redux";
import { editItem } from "../store/reducers/tasks";

function EditableRow({ item }) {
  const dispatch = useDispatch();

  const [editingText, setEditingText] = useState(item.text);
  return (
    <div className={styles.form}>
      <input
        type="text"
        onChange={(e) => setEditingText(e.target.value)}
        value={editingText}
        id={item.id}
      />{" "}
      <Button onClick={() => dispatch(editItem(item.id, editingText))}>
        Save
      </Button>{" "}
      {/* <Button type="button" onClick={() => handleCancelClick(item.id)}>
        Cancel
      </Button> */}
    </div>
  );
}

export default EditableRow;

// function handleCancelClick() {
//   setTodoEditing(null);
// }

// function handleSaveEdited(id) {
//   const editArr = (prevItems) => {
//     const updatedItems = prevItems.filter((item) => item.id !== id);
//     return updatedItems;
//   };
//   setItems(editArr);

//   setItems((editArr) => {
//     const editTodo = [...editArr];
//     editTodo.unshift({
//       id: uuidv4(),
//       text: editingText.slice(0, 24),
//       backgroundColor: `${
//         "#" + Math.floor(Math.random() * 16777215).toString(16)
//       }`,
//     });
//     return editTodo;
//   });

//   setTodoEditing(null);
//   setCountEdited(countEdited + 1);
// }

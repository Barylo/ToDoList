import React from "react";
import { v4 as uuidv4 } from "uuid";

function EditableRow(
  props,
  {
    setTodoEditing,
    setItems,
    editingText,
    setEditingText,
    setCountEdited,
    countEdited,
  }
) {
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
      editTodo.unshift({ id: uuidv4(), text: editingText });
      return editTodo;
    });

    setTodoEditing(null);
    setCountEdited(countEdited + 1);
  }

  return (
    <div className="form">
      <input
        type="text"
        onChange={(e) => setEditingText(e.target.value)}
        value={editingText}
        id={props.id}
      />
      <button className="btn" onClick={() => handleSaveEdited(props.id)}>
        Save
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => handleCancelClick(props.id)}
      >
        Cancel
      </button>
    </div>
  );
}

export default EditableRow;

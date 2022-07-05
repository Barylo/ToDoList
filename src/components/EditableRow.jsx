import React, { useState } from "react";

function EditableRow(props) {
  return (
    <div className="form">
      <input
        type="text"
        onChange={(e) => props.setEditingText(e.target.value)}
        value={props.editingText}
      />
      <button className="btn" onClick={() => props.onSaveEdited(props.id)}>
        Save
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => props.onCancelEdit(props.id)}
      >
        Cancel
      </button>
    </div>
  );
}

export default EditableRow;

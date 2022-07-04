import React from "react";

function EditableRow(props) {
  return (
    <div className="form">
      <input
        type="text"
        onChange={(e) => setEditingText(e.target.value)}
        value={props.text}
      />
      <button
        type="btn"
        className="btn"
        onClick={() => props.onSaveEdited(props.id)}
      >
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

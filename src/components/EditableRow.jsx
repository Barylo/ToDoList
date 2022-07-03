import React from "react";
import { isPropertySignature } from "typescript";

function EditableRow(props) {
  return (
    <div className="form">
      <form onSubmit={() => props.onSaveEdited(props.id)}>
        <input
          type="text"
          value={props.text}
          onChange={() => props.handleChange(props.id)}
        />
        <button type="submit" className="btn">
          Save
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => props.onCancelEdit(props.id)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditableRow;

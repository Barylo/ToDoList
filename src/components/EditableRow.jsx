import React from "react";
import { isPropertySignature } from "typescript";

function EditableRow(id) {
  function handleCancelClick() {
    event.preventDefault();
    // return setEditId(null);
  }

  function handleSaveEdited() {
    event.preventDefault();
  }

  return (
    <div className="form">
      <form>
        <input
          type="text"
          // value={editId}
          // onChange={handleEditFormChange}
        ></input>
        <button type="submit" className="btn" onClick={handleSaveEdited}>
          Save
        </button>
        <button type="button" className="btn" onClick={handleCancelClick}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditableRow;

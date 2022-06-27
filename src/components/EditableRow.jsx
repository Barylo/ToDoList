import React from "react";
import { isPropertySignature } from "typescript";

function EditableRow(id) {
  function handleCancelClick() {}

  function handleSaveEdited() {}

  return (
    <div className="form">
      <form>
        <input
          type="text"
          //   value={editId}
          // onChange={handleEditFormChange}
        ></input>
        <button type="submit" onClick={handleSaveEdited}>
          Save
        </button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditableRow;

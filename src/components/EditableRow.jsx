import React from "react";
import { isPropertySignature } from "typescript";

// function handleCancelClick() {}

// function handleSaveEdited() {}

function EditableRow(id) {
  return (
    <form>
      <input
        type="text"
        // value={}
        // onChange={handleEditFormChange}
      ></input>
      <button type="submit" onClick={handleSaveEdited}>
        Save
      </button>
      <button type="button" onClick={handleCancelClick}>
        Cancel
      </button>
    </form>
  );
}

export default EditableRow;

import React, { useState } from "react";

function EditableRow(props) {
  const [input, setInput] = useState([props.text]);

  function handleInputState(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleInputState} value={input} />
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

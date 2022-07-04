import React, { useState, Fragment } from "react";
import EditableRow from "./EditableRow";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  // const [editFormData, setEditFormData] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  // function handleSubmitFormChange(event) {
  //   event.preventDefault();
  //   const fieldValue = event.target.value;
  //   const newFormData = { ...prevItems, inputText };
  // }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    event.preventDefault();
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addItem();
    }
    return <input type="text" onKeyDown={handleKeyDown} />;
  }

  function handleEdit(id) {
    event.preventDefault();
    setTodoEditing(id);
  }

  function handleCancelClick() {
    event.preventDefault();
    setTodoEditing(null);
  }

  function handleSaveEdited() {
    setItems((prevItems) => {
      return [...prevItems, editingText];
    });
    setEditingText("");
    setTodoEditing(null);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <form>
          <ul>
            {items.map((item, index) =>
              todoEditing === index ? (
                <EditableRow
                  key={index}
                  id={index}
                  text={todoEditing}
                  onCancelEdit={handleCancelClick}
                  onSaveEdited={handleSaveEdited}
                />
              ) : (
                <ToDoItem
                  key={index}
                  id={index}
                  text={item}
                  onDelete={deleteItem}
                  onEdit={handleEdit}
                />
              )
            )}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default App;

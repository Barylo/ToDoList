import React, { useState, useEffect } from "react";
import EditableRow from "./EditableRow";
import ToDoItem from "./ToDoItem";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useLocalStorage("items", []);

  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

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

  function handleEdit(id, text) {
    event.preventDefault();
    setTodoEditing(id);
    setEditingText(text);
  }

  function handleCancelClick() {
    event.preventDefault();
    setTodoEditing(null);
  }

  function handleSaveEdited(id) {
    const newArr = items.filter((item, index) => {
      return index !== id;
    });
    setItems([...newArr, editingText]);

    setTodoEditing(null);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List with {items.length} tasks</h1>
      </div>
      <p>{} ToDoes are completed</p>
      <p>{} ToDoes are updated</p>
      <p>{} ToDoes are deleted</p>
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
                  onCancelEdit={handleCancelClick}
                  onSaveEdited={handleSaveEdited}
                  editingText={editingText}
                  setEditingText={setEditingText}
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

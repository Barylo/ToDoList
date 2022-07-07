import React, { useState } from "react";
import EditableRow from "./EditableRow";
import ToDoItem from "./ToDoItem";
import useLocalStorage from "./useLocalStorage";
import FetchData from "./FetchData";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useLocalStorage("", []);

  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const [countCreated, setCountCreated] = useLocalStorage("countCreated", 0);
  const [countEdited, setCountEdited] = useLocalStorage("countEdited", 0);
  const [countDeleted, setCountDeleted] = useLocalStorage("countDeleted", 0);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });

    setInputText("");
    setCountCreated(countCreated + 1);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
    setCountDeleted(countDeleted + 1);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addItem();
    }
    return <input type="text" onKeyDown={handleKeyDown} />;
  }

  function handleEdit(id, text) {
    setTodoEditing(id);
    setEditingText(text);
  }

  function handleCancelClick() {
    setTodoEditing(null);
  }

  function handleSaveEdited(id) {
    const newArr = items.filter((item, index) => {
      return index !== id;
    });
    setItems([...newArr, editingText]);

    setTodoEditing(null);
    setCountEdited(countEdited + 1);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List with {items.length} tasks</h1>
      </div>
      <p>{countCreated} ToDoes are created</p>
      <p>{countEdited} ToDoes are updated</p>
      <p>{countDeleted} ToDoes are deleted</p>
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
          <FetchData />
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

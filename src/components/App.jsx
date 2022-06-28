import React, { useState, Fragment } from "react";
import EditableRow from "./EditableRow";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  // const [editFormData, setEditFormData] = useState("");
  const [editId, setEditId] = useState(null);

  // function handleEditFormChange(event) {
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
    setEditId((currentIdItem) => {
      return items.find((item, index) => {
        return index === id;
      });
    });
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
            {items.map((item, index) => (
              <Fragment>
                {editId === item ? (
                  <EditableRow />
                ) : (
                  <ToDoItem
                    key={index}
                    id={index}
                    text={item}
                    onDelete={deleteItem}
                    onEdit={handleEdit}
                  />
                )}
              </Fragment>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default App;

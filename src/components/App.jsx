import React, { useState, useEffect } from "react";
import EditableRow from "./EditableRow";
import ToDoItem from "./ToDoItem";
import useLocalStorage from "./useLocalStorage";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useLocalStorage("items", []);

  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const [countCreated, setCountCreated] = useLocalStorage("countCreated", 0);
  const [countEdited, setCountEdited] = useLocalStorage("countEdited", 0);
  const [countDeleted, setCountDeleted] = useLocalStorage("countDeleted", 0);

  // const [posts, setPosts] = useLocalStorage("posts", []);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json"
      )
      .then((res) => {
        const transformedData = res.data.map((post) => {
          return { id: uuidv4(), text: post.text };
        });
        setItems(transformedData);
      })
      .catch((err) => {});
  }, []);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      const newTodo = [...prevItems];
      newTodo.unshift({ id: uuidv4(), text: inputText });
      return newTodo;
    });

    setInputText("");
    setCountCreated(countCreated + 1);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return updatedItems;
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
    const editArr = (prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      return updatedItems;
    };
    setItems(editArr);

    setItems((editArr) => {
      const editTodo = [...editArr];
      editTodo.unshift({ id: uuidv4(), text: editingText });
      return editTodo;
    });

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
          <ul>
            {items.map((item) =>
              todoEditing === item.id ? (
                <EditableRow
                  key={item.id}
                  id={item.id}
                  onCancelEdit={handleCancelClick}
                  onSaveEdited={handleSaveEdited}
                  editingText={editingText}
                  setEditingText={setEditingText}
                />
              ) : (
                <ToDoItem
                  key={item.id}
                  id={item.id}
                  text={item.text}
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

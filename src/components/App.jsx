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

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json"
      )
      .then((res) => {
        // console.log(res);
        const transformedData = res.data.map((post) => {
          return { id: uuidv4(), text: post.text };
        });
        // setItems(...items, transformedData);
        setPosts(transformedData);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  console.log(posts);
  // setItems(...items, posts);

  console.log(items);

  function handleChange(event) {
    const newValue = {
      id: uuidv4(),
      text: event.target.value,
    };
    setInputText(newValue);
  }

  function addItem() {
    setItems((items) => {
      return [...items, inputText];
    });
    setInputText("");
    setCountCreated(countCreated + 1);
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
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
    const newArr = items.filter((item) => item.id !== id);
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
          value={inputText.text}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <form>
          <ul>
            {items.map((item, id) =>
              todoEditing === item.id ? (
                <EditableRow
                  key={id}
                  id={id}
                  onCancelEdit={handleCancelClick}
                  onSaveEdited={handleSaveEdited}
                  editingText={editingText}
                  setEditingText={setEditingText}
                />
              ) : (
                <ToDoItem
                  key={id}
                  id={id}
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

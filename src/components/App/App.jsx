import React, { useState } from "react";
import ToDoInput from "../ToDoInput/ToDoInput";
import Counter from "../Counter";
import Header from "../Header/Header";
import ToDoList from "../ToDoList";
import useLocalStorage from "../useLocalStorage";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useLocalStorage("items", []);

  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const [countCreated, setCountCreated] = useLocalStorage("countCreated", 0);
  const [countEdited, setCountEdited] = useLocalStorage("countEdited", 0);
  const [countDeleted, setCountDeleted] = useLocalStorage("countDeleted", 0);

  return (
    <div className="container">
      <Header items={items} />
      <Counter
        countCreated={countCreated}
        countEdited={countEdited}
        countDeleted={countDeleted}
      />
      <ToDoInput
        items={items}
        setItems={setItems}
        setInputText={setInputText}
        inputText={inputText}
        setEditingText={setEditingText}
        editingText={editingText}
        setCountCreated={setCountCreated}
        setCountDeleted={setCountDeleted}
        setCountEdited={setCountEdited}
        countCreated={countCreated}
        countEdited={countEdited}
        countDeleted={countDeleted}
        setTodoEditing={setTodoEditing}
      />

      <ToDoList
        items={items}
        setItems={setItems}
        setTodoEditing={setTodoEditing}
        setCountEdited={setCountEdited}
        countEdited={countEdited}
        countDeleted={countDeleted}
        setCountDeleted={setCountDeleted}
        todoEditing={todoEditing}
        setEditingText={setEditingText}
        editingText={editingText}
      />
    </div>
  );
}

export default App;

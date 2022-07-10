import React from "react";
import { v4 as uuidv4 } from "uuid";

function ToDoInput({
  items,
  setItems,
  setInputText,
  inputText,
  setCountCreated,
  countCreated,
}) {
  const fetchData = (e) => {
    e.preventDefault();
    let url =
      "https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems([
          ...items,
          ...data.map((item) => {
            return {
              text: item.text,
              id: uuidv4(),
            };
          }),
        ]);
      });
  };

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

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addItem();
    }
    return <input type="text" onKeyDown={handleKeyDown} />;
  }

  return (
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
      <button onClick={fetchData}>
        <span>Get TodoList from outside data</span>
      </button>
    </div>
  );
}

export default ToDoInput;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../UI/Button/Button";
import styled from "styled-components";
import styles from "./ToDoInput.module.css";
import Input from "../UI/Input/Input";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/reducers/tasks";

const FormControl = styled.div`
  display: inline-block;
  width: 100%;
  border: 3px transparent #ccc;
  font-family: "Architects Daughter", cursive;
  line-height: 1rem;
  padding: 0 0.25rem;

  & input {
    display: inline-block;
    width: 70%;
    border-radius: 5px;
    font: inherit;
    line-height: 2.5rem;
    padding: 0 0.25rem;
    border: 2px solid ${(props) => (props.invalid ? "red" : "transparent")};
    background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
    border-bottom: dashed 3px #fdcb6e;
  }

  & input:focus {
    outline: none;
    background: #fdcb6e;
    border-color: #8b005d;
  }
`;

function ToDoInput() {
  // const [isValid, setIsValid] = useState(true);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const items = useSelector((store) => store.tasks.items);

  // const fetchData = (e) => {
  //   e.preventDefault();
  //   let url =
  //     "https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dispatch(
  //         addItem([
  //           ...items,
  //           ...data.map((item) => {
  //             return {
  //               text: item.text.slice(0, 24),
  //               isDelete: false,
  //               isImportant: false,
  //               isDone: false,
  //               id: uuidv4(),
  //               backgroundColor: `${
  //                 "#" + Math.floor(Math.random() * 16777215).toString(16)
  //               }`,
  //             };
  //           }),
  //         ])
  //       );
  //     });
  // };

  return (
    <div className={styles.form}>
      <FormControl>
        <Input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />{" "}
        <Button
          onClick={() => {
            dispatch(addItem(inputText));
            setInputText("");
          }}
        >
          <span>Add</span>
        </Button>
      </FormControl>{" "}
      <div className={styles.form2}>
        <Button>
          <span>Get TodoList from outside data</span>
        </Button>{" "}
        <Button>
          <span>Clear To-do list</span>
        </Button>
      </div>
    </div>
  );
}

export default ToDoInput;

// function handleChange(event) {
//   if (event.target.value.trim().length > 0) {
//     setIsValid(true);
//   }
//   const newValue = event.target.value;
//   setInputText(newValue);
// }

// function addItem() {
//   if (inputText.trim().length === 0) {
//     setIsValid(false);
//     return;
//   }
//   setItems((prevItems) => {
//     const newTodo = [...prevItems];
//     newTodo.unshift({
//       id: uuidv4(),
//       text: inputText.slice(0, 24),
//       backgroundColor: `${
//         "#" + Math.floor(Math.random() * 16777215).toString(16)
//       }`,
//     });

//     return newTodo;
//   });

//   setInputText("");
//   setCountCreated(countCreated + 1);
// }

// function handleKeyDown(event) {
//   if (event.key === "Enter") {
//     addItem();
//   }
//   return <Input type="text" onKeyDown={handleKeyDown} />;
// }

// function handleClearList() {
//   setItems([]);
// }

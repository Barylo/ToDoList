import React, { Fragment, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import styled from "styled-components";
import styles from "../ToDoInput/ToDoInput.module.css";
import Input from "../UI/Input/Input";
import { addItem, deleteItem, doDone } from "../../store/reducers/tasks";

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

function App() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.tasks.items);

  const [inputText, setInputText] = useState("");

  return (
    <div className="container">
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
      <form>
        <ul>
          {items.map((item) => (
            <Fragment>
              <div>
                <li
                  key={item.id}
                  onClick={() => dispatch(doDone(item.id))}
                  style={{
                    textDecoration: item.isDone ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </li>
              </div>
              <div className={styles.form3}>
                {/* <Button
                  onClick={() => {
                    handleEdit(id, text);
                  }}
                >
                  Edit
                </Button>{" "} */}
                <Button onClick={() => dispatch(deleteItem(item.id))}>
                  Delete
                </Button>
              </div>
            </Fragment>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;

// Saved for a note
// import React, { useState } from "react";
// import ToDoInput from "../ToDoInput/ToDoInput";
// import Counter from "../Counter";
// import Header from "../Header/Header";
// import ToDoList from "../ToDoList";
// import useLocalStorage from "../useLocalStorage";
// import "./App.css";

// import Modal from "react-modal";

// Modal.setAppElement("#root");

// function App() {
//   const [inputText, setInputText] = useState("");
//   const [items, setItems] = useLocalStorage("items", []);

//   const [todoEditing, setTodoEditing] = useState(null);
//   const [editingText, setEditingText] = useState("");

//   const [countCreated, setCountCreated] = useLocalStorage("countCreated", 0);
//   const [countEdited, setCountEdited] = useLocalStorage("countEdited", 0);
//   const [countDeleted, setCountDeleted] = useLocalStorage("countDeleted", 0);

//   const [isOpen, setIsOpen] = useState(false);

//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <div className="container">
//       <Header items={items} />
//       <Counter
//         countCreated={countCreated}
//         countEdited={countEdited}
//         countDeleted={countDeleted}
//       />

//       <button onClick={toggleModal}>Open modal</button>

//       <Modal className="modal" isOpen={isOpen} onRequestClose={toggleModal}>
//         <ToDoInput
//           items={items}
//           setItems={setItems}
//           setInputText={setInputText}
//           inputText={inputText}
//           setEditingText={setEditingText}
//           editingText={editingText}
//           setCountCreated={setCountCreated}
//           setCountDeleted={setCountDeleted}
//           setCountEdited={setCountEdited}
//           countCreated={countCreated}
//           countEdited={countEdited}
//           countDeleted={countDeleted}
//           setTodoEditing={setTodoEditing}
//         />

//         <button onClick={toggleModal}>Close modal</button>
//       </Modal>

//       <ToDoList
//         items={items}
//         setItems={setItems}
//         setTodoEditing={setTodoEditing}
//         setCountEdited={setCountEdited}
//         countEdited={countEdited}
//         countDeleted={countDeleted}
//         setCountDeleted={setCountDeleted}
//         todoEditing={todoEditing}
//         setEditingText={setEditingText}
//         editingText={editingText}
//       />
//     </div>
//   );
// }

// export default App;

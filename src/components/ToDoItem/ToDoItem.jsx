import React, { useState, Fragment } from "react";
import Button from "../UI/Button/Button";
import "./ToDoItem.css";
import styles from "../ToDoInput/ToDoInput.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, doDone, editItem } from "../../store/reducers/tasks";

function ToDoItem({ item }) {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.tasks.items);

  return (
    <div
      className="item"
      // style={{
      //   backgroundColor: `${backgroundColor}`,
      // }}
    >
      <form>
        <li
          key={item.id}
          onClick={() => dispatch(doDone(item.id))}
          style={{
            textDecoration: item.isDone ? "line-through" : "none",
          }}
        >
          {item.text}
          <Button
            onClick={() => {
              dispatch(editItem(item.id, item.text));
            }}
          >
            Edit
          </Button>{" "}
          <Button onClick={() => dispatch(deleteItem(item.id))}>Delete</Button>
        </li>
      </form>
    </div>
  );
}

export default ToDoItem;

// const [isMarked, setIsMarked] = useState(false);

// function handleMark() {
//   setIsMarked((prevValue) => {
//     return !prevValue;
//   });
// }

// function handleEdit(id, text) {
//   setTodoEditing(id);
//   setEditingText(text);
// }

// function deleteItem(id) {
//   setItems((prevItems) => {
//     const updatedItems = prevItems.filter((item) => item.id !== id);
//     return updatedItems;
//   });

//   setCountDeleted(countDeleted + 1);
// }

import React, { useState } from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import EditableRow from "./EditableRow";
import { useSelector } from "react-redux";
import styles from "./ToDoInput/ToDoInput.module.css";

export default function ToDoList() {
  // const [todoEditing, setTodoEditing] = useState(null);
  const items = useSelector((store) => store.tasks.items);

  return (
    <div>
      {items.map((item) =>
        item.isEdit ? <EditableRow item={item} /> : <ToDoItem item={item} />
      )}
    </div>
  );
}

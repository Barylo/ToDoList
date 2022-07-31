import React, { useState } from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import EditableRow from "./EditableRow";
import { useSelector } from "react-redux";

export default function ToDoList() {
  const [todoEditing, setTodoEditing] = useState(null);
  const items = useSelector((store) => store.tasks.items);

  return (
    <div>
      <form>
        <ul>
          {items.map((item) =>
            item.isEdit ? <EditableRow item={item} /> : <ToDoItem item={item} />
          )}
        </ul>
      </form>
    </div>
  );
}

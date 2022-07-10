import React from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import EditableRow from "./EditableRow";

export default function ToDoList({
  items,
  setItems,
  setTodoEditing,
  setCountEdited,
  countEdited,
  countDeleted,
  setCountDeleted,
  todoEditing,
  handleCancelClick,
  handleSaveEdited,
  setEditingText,
  editingText,
}) {
  return (
    <div>
      <form>
        <ul>
          {items.map((item) =>
            todoEditing === item.id ? (
              <EditableRow
                key={item.id}
                id={item.id}
                editingText={editingText}
                setEditingText={setEditingText}
                setItems={setItems}
                setTodoEditing={setTodoEditing}
                setCountEdited={setCountEdited}
                countEdited={countEdited}
              />
            ) : (
              <ToDoItem
                key={item.id}
                id={item.id}
                text={item.text}
                setTodoEditing={setTodoEditing}
                setEditingText={setEditingText}
                setItems={setItems}
                countDeleted={countDeleted}
                setCountDeleted={setCountDeleted}
              />
            )
          )}
        </ul>
      </form>
    </div>
  );
}

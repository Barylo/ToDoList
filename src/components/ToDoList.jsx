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
  setEditingText,
  editingText,
  backgroundColor,
}) {
  return (
    <div>
      <form>
        {/* <ul> */}
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
              // hex={hex}
            />
          ) : (
            <ToDoItem
              key={item.id}
              id={item.id}
              text={item.text}
              backgroundColor={item.backgroundColor}
              setTodoEditing={setTodoEditing}
              setEditingText={setEditingText}
              setItems={setItems}
              countDeleted={countDeleted}
              setCountDeleted={setCountDeleted}
              // hex={hex}
            />
          )
        )}
        {/* </ul> */}
      </form>
    </div>
  );
}

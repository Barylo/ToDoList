import React from "react";

export default function Header({ items }) {
  return (
    <div className="heading">
      <h1>To-Do List with {items.length} tasks</h1>
    </div>
  );
}

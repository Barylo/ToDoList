import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector((store) => store.tasks.items);
  return (
    <div className="heading">
      <h1>To-Do List with {items.length} tasks</h1>
    </div>
  );
}

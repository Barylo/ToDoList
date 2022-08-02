import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const tasks = useSelector((store) => store.tasks);
  return (
    <div>
      {" "}
      <p>{tasks.countCreated} To-Does are created</p>
      <p>{tasks.countEdited} To-Does are updated</p>
      <p>{tasks.countDeleted} To-Does are deleted</p>
    </div>
  );
}

export default Counter;

import React from "react";

function Counter({ countCreated, countEdited, countDeleted }) {
  return (
    <div>
      {" "}
      <p>{countCreated} To-Does are created</p>
      <p>{countEdited} To-Does are updated</p>
      <p>{countDeleted} To-Does are deleted</p>
    </div>
  );
}

export default Counter;

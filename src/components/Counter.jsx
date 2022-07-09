import React from "react";

function Counter({ countCreated, countEdited, countDeleted }) {
  return (
    <div>
      {" "}
      <p>{countCreated} ToDoes are created</p>
      <p>{countEdited} ToDoes are updated</p>
      <p>{countDeleted} ToDoes are deleted</p>
    </div>
  );
}

export default Counter;

import React, { useState } from "react";
import "./todo-list.css";

export function Task({ data: { title }, HandleRemove }) {
  const [isComplete, setIsComplete] = useState(false);

  const handleCheckbox = () => {
    setIsComplete(!isComplete);
  };


  

  // const handleRemoveBtn = (e) => {
  //   // console.log( e.currentTarget.parentElement);
  //   e.currentTarget.parentElement.remove()
  // };

  return (
    <div className="list-group-item list-group-numbered d-flex item-holder justify-content-between">
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          className="m-2"
          name="item"
          id="item"
          onChange={handleCheckbox}
          checked={isComplete}
        />
        <li
          className={
            isComplete === true
              ? "text-decoration-line-through"
              : "text-decoration-none"
          }
        >
          {title}
        </li>
      </div>

      <button onClick={HandleRemove}>
        <i className="bi bi-trash"></i>
      </button>
    </div>
  );
}

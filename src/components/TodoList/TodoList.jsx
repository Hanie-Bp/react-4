import React, { useEffect, useState } from "react";
import { Task } from "./Task";

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [alertInput, setAlertInput] = useState("");

  const AddTask = () => {
    if (inputValue === "") {
      setAlertInput("input should not be empty");
      return;
    }
    setTasks([...tasks, { title: inputValue }]);
    setInputValue("");
    setAlertInput("");
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) => setTasks(data.slice(0, 5)))
      .catch((error) => console.error("error for fetch data:", error));
  }, []);

  const removeTask = (elementIndex) => {
    setTasks(tasks.filter((task, index) => index !== elementIndex));
  };

  

  return (
    <div
      className="todo-list-container container d-flex flex-column justify-content-between align-items-center"
      style={{ marginTop: "100px" }}
    >
      <h1 className="mb-3">Todo List</h1>
      <div className="input-container d-flex">
        <input
          type="text"
          id="input_task"
          className="form-control"
          value={inputValue}
          onChange={handleInput}
        />

        <button className="btn btn-primary ms-4" onClick={AddTask}>
          Add
        </button>
      </div>
      <p className="input-alert">{alertInput}</p>
      <ul className="list-group  mt-4">
        {tasks.map((task, index) => (
          <Task key={index} data={task}  HandleRemove={() => removeTask(index)}/>
        ))}
      </ul>
    </div>
  );
};

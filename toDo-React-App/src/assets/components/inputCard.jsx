// import React from "react";
import { useTasks } from "../contexts/TaskContext";
import { useState } from "react";

function inputCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { tasks, setTasks } = useTasks();

  // console.log(useTasks());

  const taskAdder = () => {
    setTasks([...tasks, { title, description }]);
    console.log("After addding a task ", tasks);
    setTitle("");
    setDescription("");
  };

  return (
    <div className=" flex flex-col gap-3 w-3/4 border-2 border-blue-400 mt-3 p-4 rounded-md mx-auto">
      <h1 className="text-2xl font-medium tracking-tight ">Tasks Manager</h1>
      <input
        type="text"
        placeholder="Enter your task title"
        className="p-1  border-zinc-600 border-2 rounded text-red-800"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        name="textArea"
        id=""
        placeholder="Describe your task"
        className="p-1  border-zinc-600 border-2 rounded"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer hover:scale-95"
        onClick={() => {
          taskAdder();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default inputCard;

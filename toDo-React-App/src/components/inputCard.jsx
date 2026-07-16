// import React from "react";
import { UseTasks } from "../contexts/TaskContext";
import { useState } from "react";
import { Usetheme } from "../contexts/themeContext";

function inputCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { tasks, setTasks } = UseTasks();
  const { isDark, setIsDark } = Usetheme();

  // console.log(useTasks());

  const taskAdder = () => {
    setTasks([...tasks, { title, description }]);
    console.log("After addding a task ", tasks);
    setTitle("");
    setDescription("");
  };

  return (
    <div
      className={` flex flex-col gap-3 w-3/4 border-2 border-blue-400 mt-3 p-4 rounded-md mx-auto ${isDark && "border-zinc-200"}`}
    >
      <h1
        className={`text-2xl font-medium tracking-tight ${isDark && "text-slate-50 "}`}
      >
        Tasks Manager
      </h1>
      <input
        type="text"
        placeholder="Enter your task title"
        className={`p-1  border-zinc-600 border-2 rounded text-red-800 ${isDark && " placeholder:text-zinc-400 text-white"}`}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        name="textArea"
        id=""
        placeholder="Describe your task"
        className={`p-1  border-zinc-600 border-2 rounded ${isDark && "text-green-50 placeholder:text-green-50 "}`}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <button
        className={`bg-blue-500  p-2 rounded-md text-slate-50 hover:bg-blue-600 cursor-pointer hover:scale-95 ${isDark && " text-zinc-800 "}`}
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

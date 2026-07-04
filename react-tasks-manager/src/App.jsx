import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("");
  const [descr, setDescr] = useState("");
  const [tasks, setTasks] = useState([]);

  const headChangeHandler = (element) => {
    setHeading(element.target.value);
  };

  const descrChangeHandler = (element) => {
    setDescr(element.target.value);
  };

  const submitHandler = (element) => {
    element.preventDefault();
    // let newtask = { heading, descr };
    // setTasks((prev) => ({ ...prev, heading,descr }));
    let alltasks = [...tasks];

    alltasks.push({ heading, descr });
    setTasks(alltasks);
    // setTasks.push(newtask)
    console.log(tasks);
    setDescr("");
    setHeading("");
  };
  const deleteTaskHAndler = (index, e) => {
    let allTasks = [...tasks];
    allTasks.splice(index, 1);
    setTasks(allTasks);
  };

  return (
    <div className="w-full flex p-8  gap-5 flex-wrap">
      <form
        action=""
        method="post"
        className="flex flex-col gap-7  p-6  lg:w-1/2 sm:w-full"
      >
        <input
          type="text"
          className="heading border-4 border-black py-1.5 px-2"
          placeholder="Enter you task Heading"
          value={heading}
          onChange={(e) => {
            headChangeHandler(e);
          }}
        />
        <textarea
          name=""
          id=""
          className="description border-4 border-black py-1.5 px-2 "
          placeholder="Enter your task details"
          value={descr}
          onChange={(e) => {
            descrChangeHandler(e);
          }}
        ></textarea>
        <button
          type="submit"
          className="border-2 border-black py-1.5 px-2 bg-green-400 active:scale-90 cursor-pointer"
          onClick={(e) => {
            submitHandler(e);
          }}
        >
          Add Task
        </button>
      </form>

      <div className="allTasks lg:w-1/2 sm:w-full  lg:border-l-4 sm:border-2 border-black p-5 flex gap-3 flex-wrap gap-y-8">
        {tasks.map((task, index) => {
          return (
            <div
              className="taskCard flex flex-col justify-between w-50 h-60 border-2 border-black pb-2 rounded-2xl overflow-hidden"
              key={index}
            >
              <div className="flex flex-col p-1.5 overflow-hidden">
                <div className="heading tracking-tighter font-bold">
                  {task.heading}
                </div>
                <hr className="mt-0.5" />
                <div className="description wrap-break-word">{task.descr}</div>
              </div>
              <button
                className="bg-red-500 rounded py-1 cursor-pointer active:scale-90 w-3/4 mx-auto"
                onClick={(e) => {
                  deleteTaskHAndler(index, e);
                }}
              >
                Delete Task
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

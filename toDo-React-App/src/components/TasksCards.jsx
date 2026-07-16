// import React from "react";
import { useState } from "react";
import { UseTasks } from "../contexts/TaskContext";
import UpdateCard from "./updateCard";
import { Usetheme } from "../contexts/themeContext";

function TasksCards() {
  const { tasks, setTasks } = UseTasks();
  const [editid, setEditId] = useState(null);
  const { isDark, setIsDark } = Usetheme();
  console.log(
    `The value of isDark = ${isDark}, and its controlling function = ${setIsDark}`,
  );

  // setTasks(); Failed attempt to store the data in localstorage.
  // useEffect(() => {
  //   let storeTasks= JSON.parse(localStorage.getItem("Todo"))
  //   console.log("storeTasks", storeTasks)
  //   setTasks(storeTasks)
  //   return () => {};
  // }, [tasks]);

  // console.log("pinted tasks before entry to HTML", tasks);

  const deleteHandler = (id) => {
    // console.log("The task id", id);
    // tasks([...allTasks, allTasks.splice(index,1)])

    const tasksArray = [...tasks];
    const updatedTasksArray = tasksArray.toSpliced(id, 1);
    setTasks(updatedTasksArray);
    // setTasks([...tasks, tasks.toSpliced(id,1)]) Not working, It'll only add
  };
  
  { (isDark)? document.querySelector("body").className="dark":document.querySelector("body").className="" } // ctrling the ng of the overall
  // function updateHandler() {
  //   // return <InputCard></InputCard>
  // }
  return (
    <>
      {editid && (
        <div className="absolute top-0 left-0 w-screen h-screen  backdrop-blur-sm flex justify-center items-center">
          <UpdateCard id={editid - 1} setEditId={setEditId} />
        </div>
      )}
      {tasks.map((task, index) => {
        return (
          <div
            className={`singleCard flex w-full flex-col gap-1 justify-between items-center border-blue-400 border-2 p-3 rounded ${isDark && "border-zinc-200"}`}
            key={index}
          >
            <div className="cardMain w-full">
              <h3 className={`text-xl font-bold font-sans ${isDark && "text-amber-50"}`}>{task.title}</h3>
              <div className={`description wrap-break-word ${isDark && "text-amber-50"}`}>
                {task.description}
              </div>
            </div>
            <div className="twoButtons flex gap-1 self-end">
              <button
                className={`py-1 px-2 border-2  text-white rounded-md text-center bg-green-500 cursor-pointer  ${isDark && "text-zinc-300"}`}
                onClick={() => {
                  setEditId(index + 1);
                }}
              >
                Edit
              </button>
              <button
                className={`py-1 px-2 border-2 text-white rounded-md text-center bg-red-500 cursor-pointer ${isDark && "text-zinc-300"}`}
                onClick={() => {
                  deleteHandler(index);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TasksCards;

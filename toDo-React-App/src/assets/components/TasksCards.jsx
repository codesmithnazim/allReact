// import React from "react";
import { useState } from "react";
import { useTasks } from "../contexts/TaskContext";
import UpdateCard from "./updateCard";
function TasksCards() {
  const { tasks, setTasks } = useTasks();
  const [editid, setEditId] = useState(null);
  console.log("pinted tasks before entry to HTML", tasks);

  const deleteHandler = (id) => {
    console.log("The task id", id);
    // tasks([...allTasks, allTasks.splice(index,1)])
    const tasksArray = [...tasks];
    const updatedTasksArray = tasksArray.toSpliced(id, 1);
    setTasks(updatedTasksArray);
  };

  // function updateHandler() {
  //   // return <InputCard></InputCard>
  // }
  return (
    <>
      {editid && (
        <div className="absolute top-0 left-0 w-screen h-screen  backdrop-blur-sm flex justify-center items-center">
          <UpdateCard id={editid-1} setEditId={setEditId}/>
        </div>
      )}
      {tasks.map((task, index) => {
        return (
          <div
            className="singleCard flex w-full flex-col gap-1 justify-between items-center border-blue-400 border-2 p-3 rounded"
            key={index}
          >
            <div className="cardMain w-full">
              <h3 className="text-xl font-bold font-sans">{task.title}</h3>
              <div className="description wrap-break-word">
                {task.description}
              </div>
            </div>
            <div className="twoButtons flex gap-1 self-end">
              <button
                className="py-1 px-2 border-2  text-white rounded-md text-center bg-green-500 cursor-pointer"
           onClick={()=>{
            setEditId(index+1)
           }}
              >
                Edit
              </button>
              <button
                className="py-1 px-2 border-2 text-white rounded-md text-center bg-red-500 cursor-pointer "
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

import { useState } from "react";
import { useTasks } from "../contexts/TaskContext";
import { X } from "lucide-react";

function updateCard({ id, setEditId }) {
  const { tasks, setTasks } = useTasks();
  const [newTitle, setNewTitle] = useState(tasks[id].title);
  const [newDescp, setNewDescp] = useState(tasks[id].description);
  console.log(
    `All the tasks ${tasks}, and the user wants to edit this ${id} task`,
  );

  function tasksUpdater() {
    // setTasks([...tasks, {tasks.id.title=newTitle, tasks.id.description=newDescp}])
    let allTasks = [...tasks];
    console.log("All the tasks before update", allTasks);
    allTasks[id].title = newTitle;
    allTasks[id].description = newDescp;
    setTasks(allTasks);
    console.log("All the tasks after update", tasks);
  }

  function removeUpdateCard() {
    setEditId(null);
  }
  return (
    <div className=" flex flex-col gap-3 w-140 border-2 border-blue-400 mt-3 p-4 rounded-md mx-auto">
      <h1 className="text-2xl font-medium tracking-tight flex justify-between">
        Update Task{" "}
        <X
          color="#c90303"
          className="hover:scale-90 cursor-pointer"
          onClick={removeUpdateCard}
        />
      </h1>
      <input
        type="text"
        placeholder="Enter your task title"
        className="p-1  border-zinc-600 border-2 rounded text-red-800"
        value={newTitle}
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      />
      <textarea
        name="textArea"
        id=""
        placeholder="Describe your task"
        className="p-1  border-zinc-600 border-2 rounded"
        value={newDescp}
        onChange={(e) => {
          setNewDescp(e.target.value);
        }}
      ></textarea>
      <button
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer hover:scale-95"
        onClick={() => {
          tasksUpdater();
          removeUpdateCard();
        }}
      >
        Update
      </button>
    </div>
  );
}

export default updateCard;

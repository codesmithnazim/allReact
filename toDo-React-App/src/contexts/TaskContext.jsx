import { useContext, useState } from "react";
import Context from "./Task";

function TaskContext({ children }) {
  let storedtasks= JSON.parse(localStorage.getItem("Todo"))   || [] // This LOC will confirm the initial state of over main context array.
  console.log(storedtasks)
  const [tasks, setTasks] = useState(storedtasks);
  localStorage.setItem("Todo", JSON.stringify(tasks));   //This Loc will make the "Todo" named array of local storage updated
  return (
    <Context.Provider value={{ tasks, setTasks }}>{children}</Context.Provider>
  );
}

export function UseTasks() {
  let context = useContext(Context);
  return context;
}

export default TaskContext;
// export { useTasks };

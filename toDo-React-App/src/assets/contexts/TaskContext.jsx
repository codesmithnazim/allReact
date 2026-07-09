import { useContext, useState } from "react";
import Context from "./Task";

function TaskContext({ children }) {
  const [tasks, setTasks] = useState([]);
  return (
    <Context.Provider value={{ tasks, setTasks }}>{children}</Context.Provider>
  );
}

export function useTasks() {
  let context = useContext(Context);
  return context;
}

export default TaskContext;
// export { useTasks };

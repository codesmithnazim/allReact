// import React from "react";
import TaskContext from "./assets/contexts/TaskContext";
import InputCard from "./assets/components/inputCard";
import TasksCards from "./assets/components/TasksCards";

function App() {
  return (
    <TaskContext>
      <div className="w-180 flex flex-col gap-3  mx-auto mt-10 ">
        <InputCard></InputCard>
        <div className="allcards flex flex-col gap-3 w-3/4  mt-3  mx-auto">
          <TasksCards></TasksCards>
        </div>
      </div>
    </TaskContext>
  );
}

export default App;

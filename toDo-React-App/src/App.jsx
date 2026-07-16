// import React from "react";
import TaskContext from "./contexts/TaskContext";
import InputCard from "./components/inputCard";
import TasksCards from "./components/TasksCards";
import ThemeContext from "./contexts/ThemeContext";
import Themetogglerbtn from "./components/buttons/themetogglerbtn";

function App() {
  return (
    <ThemeContext>
      <Themetogglerbtn />
      <TaskContext>
        <div className="w-180 flex flex-col gap-3  mx-auto mt-10 ">
          <InputCard></InputCard>
          <div className="allcards flex flex-col gap-3 w-3/4  mt-3  mx-auto">
            <TasksCards></TasksCards>
          </div>
        </div>
      </TaskContext>
    </ThemeContext>
  );
}

export default App;

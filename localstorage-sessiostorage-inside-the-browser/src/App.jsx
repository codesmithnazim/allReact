import React from "react";

function App() {
  let intro = { name: "Nazim Ud Din khan Mehsud", "Roll No": 2440 };
  localStorage.setItem("name", "Chagatai  Khan");
  localStorage.setItem("fatherName", "Changez Khan");
  localStorage.setItem("intro", JSON.stringify(intro));  
  // localStorage.clear()
  console.log(localStorage.getItem("name"));
  return (
    <div>
      <h1>
        Oh! That's working, Good we'll work on this, don't worry, that I'm an
        ugly page.
      </h1>
    </div>
  );
}

export default App;

import React, { useEffect, useEffectEvent, useState } from "react";

function App() {
  const [cursor, setCursor] = useState(null);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      console.log(e);
      setCursor({ x: e.clientX, y: e.clientY });
    });

    return () => {
      window.removeEventListener("mousemove", ()=>{});
    };
  }, []);

  return (
    <div>
      cursor X= {cursor?.x} and cursor Y= {cursor?.y}
    </div>
  );
}

export default App;

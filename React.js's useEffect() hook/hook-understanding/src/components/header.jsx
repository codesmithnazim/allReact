import React, { useEffect } from "react";

function Header({ Color }) {
  useEffect(() => {
    return () => {
      // It is cleanup function it always run, when after first this  useEffect is run, becuase on second useEffect it'll cleanup the things of first useEffect
      console.log("The useeffect from the header.jsx on color change");
      console.log(
        "The remaianing of first useEffect of header.jsx is cleaned up",
      );
    };
  }, [Color]);

  return (
    <div style={{ color: `${Color}` }}>I am the header with {Color} text</div>
  );
}

export default Header;

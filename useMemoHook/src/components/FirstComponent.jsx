import React, { memo } from "react";

const FirstComponent = memo(function FirstComponent({ value }) {
  return (
    <div>
      {console.log("The value of prop passes from the parent = ", value)}
    </div>
  );
});

export default FirstComponent;

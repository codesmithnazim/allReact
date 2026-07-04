// import React from 'react'
import "../../App.css"

function MensCollections(props) {
  console.log(props.children);
  // console.log(props.children);
  return (
    <div>
      {props.children.map(e=>{return e})}
    </div>
  );
}

export default MensCollections;

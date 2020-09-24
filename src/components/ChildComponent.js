import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.methodname("child")}>Parent</button>
    </div>
  );
}

export default ChildComponent;

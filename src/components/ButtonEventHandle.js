import React from "react";
function functionclick() {
  function totallike() {
    console.log("Button Click");
  }
  return (
    <div>
      <button onClick={totallike}>Like</button>
    </div>
  );
}
export default functionclick;

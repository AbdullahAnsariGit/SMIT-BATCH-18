import React from "react";

function customInput() {
  return <div anyEvent={() => onChange("myData")}></div>;
}

function test() {
  return (
    <div>
      <input type="text" />
      <customInput onChange={(e) => console.log("myData")} />
    </div>
  );
}

export default test;

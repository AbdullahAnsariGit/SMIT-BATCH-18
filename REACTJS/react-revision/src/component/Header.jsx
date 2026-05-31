import React from "react";

function MyHeader(props) {
  const { title, className } = props;
  return (
    <div className={className}>
      <h1>{title}</h1>
    </div>
  );
}

export default MyHeader;

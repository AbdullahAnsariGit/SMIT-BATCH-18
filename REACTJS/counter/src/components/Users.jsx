import React from "react";

function Users({ items }) {
  return (
    <div>
      {items?.map((item) => {
        return (
          <div>
            <h1>{item?.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Users;

import React from "react";

function Output({ bill, value }) {
  return (
    <div>
      You pay $X ( ${bill} + $X tips)
      {value}
    </div>
  );
}

export default Output;

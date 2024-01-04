import React from "react";

function Output({ bill, tip }) {
  let total = bill + tip;

  return (
    <div>
      You pay ${total} ( ${bill} + ${tip} tips)
    </div>
  );
}

export default Output;

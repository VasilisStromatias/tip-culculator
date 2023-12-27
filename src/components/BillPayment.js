import React, { useState } from "react";

function BillPayment({ setBill }) {
  const [input, setInput] = useState(0);

  const handleInput = (e) => {
    setInput(Number(e.target.value.replace(/\D/g, "")));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBill(input);
  };

  return (
    <div className="bill-payment">
      <form onSubmit={handleSubmit}>
        <label>How much was the bill?</label>
        <input
          type="text"
          value={input}
          placeholder="Set the bill value in dollars"
          onChange={handleInput}
        />
      </form>
    </div>
  );
}

export default BillPayment;

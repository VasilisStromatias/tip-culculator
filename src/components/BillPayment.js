import React from "react";

function BillPayment({ bill, setBill }) {
  const handleInput = (e) => {
    setBill(Number(e.target.value.replace(/\D/g, "")));
  };

  return (
    <div className="bill-payment">
      <form>
        <label>How much was the bill?</label>
        <input
          type="text"
          value={bill}
          placeholder="Set the bill value in dollars"
          onChange={handleInput}
        />
      </form>
    </div>
  );
}

export default BillPayment;

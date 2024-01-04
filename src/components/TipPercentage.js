import React from "react";

function TipPercentage({ children, percentage, setPercentage }) {
  const handleSelect = (e) => {
    setPercentage(Number(e.target.value));
  };

  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={handleSelect}>
        <option value={0}>It was not good (0%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>It was excellent (20%)</option>
      </select>
    </div>
  );
}

export default TipPercentage;

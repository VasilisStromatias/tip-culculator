import React, { useState } from "react";

import BillPayment from "./components/BillPayment";
import TipPercentage from "./components/TipPercentage";
import Output from "./components/Output";
import Reset from "./components/Reset";

function App() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 200);

  const handleReset = () => {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <div>
      <BillPayment bill={bill} setBill={setBill} />
      <TipPercentage percentage={percentage1} setPercentage={setPercentage1}>
        How did you like the service?
      </TipPercentage>
      <TipPercentage percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service?
      </TipPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;

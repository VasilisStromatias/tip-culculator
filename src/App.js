import React, { useState } from "react";

import BillPayment from "./components/BillPayment";
import TipPercentage from "./components/TipPercentage";
import Output from "./components/Output";

function App() {
  const [bill, setBill] = useState(0);

  return (
    <div>
      <BillPayment setBill={setBill} />
      <TipPercentage>How did you like the service?</TipPercentage>
      <TipPercentage>How did your friend like the service?</TipPercentage>
      <Output bill={bill} />
    </div>
  );
}

export default App;

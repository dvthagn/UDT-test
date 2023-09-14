// History.js

import React, { useEffect, useState } from "react";

const History = () => {
  const [calculationHistory, setCalculationHistory] = useState([]);

  useEffect(() => {
    // Retrieve calculation history from local storage when the component mounts
    const storedHistory = JSON.parse(
      localStorage.getItem("calculationHistory")
    );
    if (storedHistory) {
      setCalculationHistory(storedHistory);
    }
  }, []);
  return (
    <div>
      <h2>Calculation History</h2>
      <ul>
        {calculationHistory?.map((calculation, index) => (
          <li key={index}>{calculation}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;

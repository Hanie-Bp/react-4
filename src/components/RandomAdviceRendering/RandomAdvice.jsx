import React, { useEffect, useState } from "react";
import "./randomAdvice.css";

export const RandomAdvice = () => {
  const [adviceData, setAdviceData] = useState(null);

  const getAdviceData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdviceData(data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  };

  

  useEffect(() => {
    getAdviceData();
  }, []);
  

  return (
    <div className="container-one">
      <div className="one">
        <div className="random-container">
          {adviceData ? <h3>{adviceData}</h3> : <p>loading...</p>}
        </div>
        <button onClick={getAdviceData}>click</button>
      </div>
    </div>
  );
};

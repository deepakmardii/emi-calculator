import React from "react";

interface EMIProps {
  title: string;
}
const EMICalculator: React.FC<EMIProps> = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>{title}</div>
      <div>Principal Amount:</div>
      <div>Rate of Interest:</div>
      <div>Months:</div>
      <button>Calculate</button>
      <div>MSG</div>
    </div>
  );
};

export default EMICalculator;

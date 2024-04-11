"use client";
import React, { useState } from "react";

interface EMIProps {
  title: string;
}
const EMICalculator: React.FC<EMIProps> = ({ title }) => {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterset] = useState(0);
  const [month, setMonths] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleEMI = () => {
    const rate = interest / (12 * 100);
    const numerator = principal * rate * Math.pow(1 + rate, month);
    const denominator = Math.pow(1 + rate, month) - 1;
    const EMI = numerator / denominator;
    setEmi(EMI);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center border-2 border-indigo-700 text-white font-semibold bg-indigo-700 rounded-md font-mono flex flex-col gap-4 px-10 py-20">
        <div className="text-4xl">{title}</div>
        <div>
          Principal Amount:{" "}
          <input
            type="number"
            className="text-black font-normal p-2 rounded w-full"
            onChange={(e) => {
              setPrincipal(parseFloat(e.target.value));
            }}
          />
        </div>
        <div>
          Rate of Interest:{" "}
          <input
            type="number"
            className="text-black font-normal p-2 rounded w-full"
            onChange={(e) => {
              setInterset(parseFloat(e.target.value));
            }}
          />
        </div>
        <div>
          Months:{" "}
          <input
            type="number"
            className="text-black font-normal p-2 rounded w-full"
            onChange={(e) => {
              setMonths(parseFloat(e.target.value));
            }}
          />
        </div>
        <button onClick={handleEMI} className="bg-emerald-500 p-2 rounded">
          Calculate
        </button>
        <div>your emi is:{emi}</div>
      </div>
    </div>
  );
};

export default EMICalculator;

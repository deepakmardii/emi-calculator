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

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center border-2 border-indigo-700 text-white font-semibold bg-indigo-700 rounded-md flex flex-col gap-4 px-10 py-20">
        <div>{title}</div>
        <div>
          Principal Amount:{" "}
          <input
            type="number"
            className="text-black font-normal p-2 rounded w-full"
          />
        </div>
        <div>
          Rate of Interest:{" "}
          <input
            type="number"
            className="text-black font-normal p-2 rounded w-full"
          />
        </div>
        <div>
          Months:{" "}
          <input
            type="number"
            className="text-black font-normal p-2 rounded w-full"
          />
        </div>
        <button>Calculate</button>
        <div>your emi is:{emi}</div>
      </div>
    </div>
  );
};

export default EMICalculator;

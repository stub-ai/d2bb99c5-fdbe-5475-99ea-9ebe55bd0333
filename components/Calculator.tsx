import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (val: string) => {
    setInput(input + val);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 p-10 rounded-lg shadow-lg">
      <div className="mb-5 text-2xl font-bold">Calculator</div>
      <input
        type="text"
        value={input}
        className="mb-4 p-2 text-lg text-right border-2 border-gray-300 rounded w-60"
        disabled
      />
      <div className="grid grid-cols-4 gap-4 w-60">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "="].map(
          (val, idx) => (
            <button
              key={idx}
              className={`p-2 border-2 border-gray-300 rounded ${
                val === "=" ? "col-span-2 bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => (val === "=" ? calculate() : handleClick(val))}
            >
              {val}
            </button>
          )
        )}
        {["+", "-", "*", "/"].map((val, idx) => (
          <button
            key={idx}
            className="p-2 bg-yellow-500 text-white border-2 border-yellow-500 rounded"
            onClick={() => handleClick(val)}
          >
            {val}
          </button>
        ))}
        <button
          className="p-2 bg-red-500 text-white border-2 border-red-500 rounded col-span-2"
          onClick={clearInput}
        >
          Clear
        </button>
      </div>
      {result && (
        <div className="mt-5 text-lg">
          Result: <span className="font-bold">{result}</span>
        </div>
      )}
    </div>
  );
};

export default Calculator;
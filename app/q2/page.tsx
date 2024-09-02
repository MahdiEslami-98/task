"use client";
import React, { useState } from "react";

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());

const Q2 = () => {
  const [word, setWord] = useState("");
  const [output, setOutput] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!word) {
      setOutput("Input can not be empty");
      return;
    }

    if (word.toLowerCase() === "z") {
      setOutput("Z is the last letter in the alphabet");
      return;
    }

    const main = alphabet.findIndex((x) => x === word.toLowerCase());

    if (main === -1) {
      setOutput("Your character is not a english alphabet");
      return;
    }
    setOutput(alphabet[main + 1].toUpperCase());
  };

  return (
    <div className="container mx-auto pt-10">
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4 md:px-0">
        <h1 className="text-2xl font-bold">Find Next Letter:</h1>
        <form
          className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 justify-center items-center"
          onSubmit={submitHandler}
        >
          <input
            placeholder="Enter a english alphabet character"
            className="border border-slate-400 px-4 py-2 rounded-md w-full md:w-72 text-gray-700"
            value={word}
            onChange={(e) => {
              if (e.target.value.length === 2) {
                setOutput("You can only enter one character");
                return;
              }
              return setWord(e.target.value);
            }}
            type="text"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Find
          </button>
        </form>
      </div>
      <div className="flex justify-center pt-20">
        <div className="w-full md:w-auto px-4 md:px-0">
          <p className="pb-4">Result :</p>
          <div className="w-full md:w-96 h-20 border border-slate-400 bg-slate-500 rounded-md flex justify-center items-center text-white">
            {output}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q2;

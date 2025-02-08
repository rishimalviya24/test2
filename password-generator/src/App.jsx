import React, { useState, useEffect, useCallback , useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //use Ref 
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  } , [password]) // for optimizations useRef


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // base characters

    if (numAllowed) str += "0123456789"; // if numbers allowed, add them
    if (charAllowed) str += "!@#$%^&*()=+`[]{}"; // if special characters allowed, add them

    // Generate password of the specified length
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length); // random index for selecting a character
      pass += str.charAt(char); // adding character to password
    }

    setPassword(pass); // set the generated password to state
  }, [length, numAllowed, charAllowed, setPassword]); // dependencies for the callback

  useEffect(() => {
    passwordGenerator(); // Call the password generator when any dependency changes
  }, [length, numAllowed, charAllowed, passwordGenerator]); // Correct dependency for useEffect



  return (
    <>
   
    <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="max-w-sm w-full p-6 bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-4">Password Generator</h2>

        {/* Password Display */}
        <div className="flex items-center justify-between bg-gray-700 rounded-lg p-3 mb-4">
          <input
            type="text"
            value = {password}
            placeholder = "password"
            readOnly
            ref={passwordRef}
            className="bg-transparent text-lg font-medium w-full "
          />
          <button
          onClick={copyPasswordToClipboard}
           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ml-3">
            Copy
          </button>
        </div>

        {/* Slider for Length */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Length:{ length } 
          </label>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
            className="w-full cursor-pointer h-2 bg-gray-700 rounded-lg appearance-none focus:outline-none"
          />
        </div>

        {/* Checkbox Options */}
        <div className="flex items-center justify-between">
          
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              className="w-5 h-5 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
          <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='numberInput'
              className="w-5 h-5 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
          <label htmlFor="numberInput">checkbox</label>

          
        </div>
      </div>
    </div>
  
    </>
  )
}

export default App

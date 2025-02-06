import React, { useState } from "react";
import "./styles.css"; // Import CSS file for styling

const Keyboard = ({ onGuess, disabled }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value.toLowerCase());

  const handleSubmit = () => {
    if (!disabled) {
      onGuess(input);
      setInput("");
    }
  };

  return (
    <div className="keyboard-container">
      {/* Label for the input */}
      <label htmlFor="wordInput" className="input-label">
        Enter a 5-letter word
      </label>

      <input
        type="text"
        id="wordInput"
        maxLength="5"
        placeholder="Enter 5-letter word"
        value={input}
        onChange={handleChange}
        disabled={disabled}
        className="styled-input"
      />

      <button onClick={handleSubmit} disabled={disabled} className="guess-button">
        Guess
      </button>
    </div>
  );
};

export default Keyboard;

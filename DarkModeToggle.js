import React, { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;

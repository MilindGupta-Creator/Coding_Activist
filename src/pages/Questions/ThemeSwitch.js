import React from "react";

const ThemeSwitch = ({ handleFileChange }) => {
  const handleThemeChange = (theme) => {
    const updatedThemeCode = `
      body {
        font-family: sans-serif;
        background-color: ${theme === "dark" ? "#222" : "#fff"};
        color: ${theme === "dark" ? "#fff" : "#222"};
        padding: 20px;
      }
    `;
    handleFileChange("/index.css", updatedThemeCode);
  };

  return (
    <div className="space-x-2">
      <button
        onClick={() => handleThemeChange("light")}
        className="px-3 py-1 bg-white text-gray-800 rounded shadow hover:bg-gray-200"
      >
        Light Theme
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className="px-3 py-1 bg-gray-800 text-white rounded shadow hover:bg-gray-600"
      >
        Dark Theme
      </button>
    </div>
  );
};

export default ThemeSwitch;

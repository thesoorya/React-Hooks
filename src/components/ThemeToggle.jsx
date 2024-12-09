import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleTheme":
      return state === "light" ? "dark" : "light";
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const ThemeToggle = () => {
  const [theme, dispatch] = useReducer(reducer, "light");

  const lightStyle = {
    backgroundColor: "#ffffff",
    color: "#000000",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const darkStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={theme === "light" ? lightStyle : darkStyle}>
      <h1>{theme === "light" ? "Light Mode 🌞" : "Dark Mode 🌙"}</h1>
      <button
        onClick={() => dispatch({ type: "toggleTheme" })}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;

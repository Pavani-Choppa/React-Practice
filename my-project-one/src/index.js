import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function print(){
  return <h1>Hello, React!</h1>;
}

function App() {
  return (
    <>
      <h1>{print()} This is a simple React app. and Practicing The React Jsx</h1>
      <h2 className="sub-title"> This is a sub-title </h2>
      <label htmlFor="name">Name:</label>
      <input type="text" autoFocus={true} maxLength={5} placeholder="Enter your name" id="name" />
    </>
  );
}



root.render(<App />);
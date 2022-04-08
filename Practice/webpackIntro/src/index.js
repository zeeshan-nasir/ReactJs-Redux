import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


// const h1 = React.createElement("h1", { className: "redText" }, "Hello React!");

// const input = React.createElement("input", { id: "data" });
// const btn = React.createElement("button", { id: "btn" }, "Click me!");

// const card = React.createElement("div", { id: "card" }, h1, input, btn);



ReactDOM.render(
    <div id="card">
        <h1 className="redText">Hello React</h1>
        <input id="data" />
        <button id="btn">Click Me!</button>
    </div>,
    document.getElementById("root")
);




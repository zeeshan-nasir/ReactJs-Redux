import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


const h1 = React.createElement("h1", { className: "redText" }, "Hello React!");

const input = React.createElement("input", { id: "data" });
const btn = React.createElement("button", { id: "btn" }, "Click me!");

const card = React.createElement("div", { id: "card" }, h1, input, btn);



ReactDOM.render(
    card,
    document.getElementById("root")
);




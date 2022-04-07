import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const h1 = React.createElement("h1", { className: "redText" }, "Hello React!");

ReactDOM.render(
    h1,
    document.getElementById("root")
);




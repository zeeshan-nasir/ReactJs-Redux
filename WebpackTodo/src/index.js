import "./index.css";
import logo from "./logo.jpg";

const root = document.getElementById("root");

// Navbar

const navbar = document.createElement("div");
const title = document.createElement("p");
title.textContent = "Todo App";
navbar.id = "nav";
const image = document.createElement("img");
image.src = logo;

// Container

const container = document.createElement("div");

const leftDiv = document.createElement("div");
const rightDiv = document.createElement("div");

// Left Div

const input = document.createElement("textarea");
const btn = document.createElement("button");
btn.id = "btn";

btn.addEventListener("click", () => {
  let todo = input.value;
  console.log(todo);
});

// Right Div

const list = document.createElement("div");
const p = document.createElement("p");

navbar.append(logo, title);
root.append(navbar);
leftDiv.append(input, btn);
list.append(p);
rightDiv.append(list);
container.append(leftDiv, rightDiv);
root.append(container);

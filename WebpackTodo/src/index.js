import "./index.css";
import logo from "./logo.jpg";

const root = document.getElementById("root");

// Navbar

const navbar = document.createElement("div");
navbar.id = "nav";

const title = document.createElement("p");
title.textContent = "Todo App";
title.id = "title";

const image = document.createElement("img");
image.src = logo;
image.id = "image";

// Container

const container = document.createElement("div");
container.id = "container";

const leftDiv = document.createElement("div");
leftDiv.id = "left";
const rightDiv = document.createElement("div");
rightDiv.id = "right";

// Left Div

const input = document.createElement("textarea");
input.placeholder = "Enter todo text"
const btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "Add";

// Right Div

btn.addEventListener("click", () => {
  let todo = input.value;
  console.log(todo);

  const list = document.createElement("div");
  list.id = "list";

  const p = document.createElement("p");
  p.textContent = todo;
  list.append(p);
  rightDiv.append(list);
});

navbar.append(image, title);
leftDiv.append(input, btn);
container.append(leftDiv, rightDiv);
root.append(navbar, container);

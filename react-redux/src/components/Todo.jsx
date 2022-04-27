import React, { useState } from "react";
import AllTodos from "./AllTodos";
import DoneTodos from "./DoneTodos";
import "./todo.css";
import TodoList from "./TodoList";

export default function Todo() {
   const [doneTodos, setDoneTodos] = useState(false);

   return (
      <div className="todo">
         <h1>Todo List</h1>
         <TodoList />
         <div className="list">
            <AllTodos />
            <div className="compT">
               <button
                  className="btn2"
                  onClick={() => {
                     setDoneTodos(!doneTodos);
                  }}
               >
                  Show Completed To-Dos
               </button>
               {doneTodos ? <DoneTodos /> : null}
            </div>
         </div>
      </div>
   );
}

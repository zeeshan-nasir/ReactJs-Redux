import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, getTodos } from "../Redux/Todos/action";
import "./todo.css";

export default function Todo() {
   const [text, setText] = useState("");

   const dispatch = useDispatch();
   const todos = useSelector((store) => store.todos.todos);

   const handleChange = () => {
      dispatch(
         addTodo({
            title: text,
            status: false,
         })
      );
   };

   const handleDelete = (title) => {
      console.log(title);
      dispatch(
         deleteTodo({
            title: text,
            status: false,
         })
      );
   };

   useEffect(() => {
      dispatch(getTodos());
   });

   return (
      <div className="todo">
         <h1>Todo List</h1>
         <select
            onChange={(e) => {
               dispatch(sort(e.target.value));
            }}
            name=""
            id=""
         >
            <option value="id">Sort by id</option>
            <option value="status">Sort by status</option>
         </select>
         <div className="list">
            {todos.map((e) => {
               return (
                  <div key={e.title} className="item">
                     ➣{e.id} {e.title} - {e.status ? "Done" : "Not Done"}
                     <button
                        className="delBtn"
                        onClick={() => handleDelete(e.title)}
                     >
                        Delete
                     </button>
                  </div>
               );
            })}
         </div>
         <div className="lower">
            <input
               onChange={(e) => {
                  setText(e.target.value);
               }}
               className="input"
               type="text"
               placeholder="Write Something"
            />
            <button onClick={handleChange}>Add</button>
         </div>
      </div>
   );
}

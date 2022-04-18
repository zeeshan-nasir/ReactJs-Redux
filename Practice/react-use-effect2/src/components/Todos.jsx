import React from "react";
import { useState, useEffect } from "react";
import Counter from "./Counter";

const Todo = () => {
   const [todos, setTodos] = useState([]);
   const [text, setText] = useState("");
   const [page, setPage] = useState(1);

   useEffect(() => {
      console.log("Mounted Todo's");
      getData();

      return function cleanup() {
         console.log("Todo is unmounted");
      };
   }, [page]);

   const getData = async () => {
      let data = await fetch(
         `http://localhost:8080/todos?_page=${page}&_limit=2`
      );
      data = await data.json();
      setTodos(data);
   };

   return (
      <div>
         <input
            onChange={(e) => {
               setText(e.target.value);
            }}
            type="text"
            placeholder="Enter todo"
         />
         <button
            onClick={() => {
               const payload = {
                  title: text,
                  status: false,
               };
               fetch("http://localhost:8080/todos", {
                  method: "POST",
                  headers: {
                     "content-type": "application/json",
                  },
                  body: JSON.stringify(payload),
               }).then(() => {
                  getData();
               });
            }}
         >
            Add Todo
         </button>

         {todos.map((todo) => (
            <div>
               {todo.id}. {todo.title}
            </div>
         ))}
         <button
            onClick={() => {
               setPage(page - 1);
            }}
         >
            Prev
         </button>
         <button
            onClick={() => {
               setPage(page + 1);
            }}
         >
            Next
         </button>
         <Counter />
      </div>
   );
};

export default Todo;

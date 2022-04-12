import React from "react";
import { useState, useEffect } from "react";

const Todo = () => {
   const [todos, setTodos] = useState([]);
   const [text, setText] = useState("");

   useEffect(() => {
      getData();
   }, []);

   const getData = async () => {
      let data = await fetch("http://localhost:8080/todos");
      data = await data.json();
      setTodos(data);
   };

   return (
      <div>
         <input onChange={(e) => {
            setText(e.target.value);
         }} type="text" placeholder='Enter todo' />
         <button onClick={() => {
            const payload = {
               title: text,
               // status: false,
            };
            fetch("http://localhost:8080/todos", {
               method: "POST",
               headers: {
                  "content-type": "application/json",
               },
               body: JSON.stringify(payload),
            }).then(() => {
               getData()
            });
         }}>Add Todo</button>

         {todos.map((todo) => (
            <div>
               {todo.id}. {todo.title}
            </div>
         ))}
      </div>
   );
};

export default Todo;


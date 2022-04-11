import React, { useState } from 'react';
import "./todo.css";

export default function Todo() {
   const [todos, setTodos] = useState([]);
   const [text, setText] = useState("");

   const addItem = (data) => {
      console.log(data);
      setTodos([...todos, data]);
   }

   return (
      <div className='todo'>
         <h1>Todo List</h1>
         <div className="list">
            {
               todos.map(e => {
                  return <div className='item'>{e}</div>
               })
            }
         </div>
         <div className='lower'>
            <input onChange={e => {
               setText(e.target.value)
            }} className='input' type="text" placeholder='Write Something' />
            <button onClick={() => { addItem(text) }}>Add</button>
         </div>
      </div>
   )
}

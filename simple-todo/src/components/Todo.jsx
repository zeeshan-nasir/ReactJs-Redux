import React, { useState } from 'react';
import "./todo.css";
import TodoList from './TodoList';

export default function Todo() {
   const [todos, setTodos] = useState([]);
   
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
                  return <div className='item'>➣ {e}</div>
               })
            }
         </div>
         <TodoList addItem={addItem} />
      </div>
   )
}

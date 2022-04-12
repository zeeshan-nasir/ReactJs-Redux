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
         <TodoList addItem={addItem} />
         <div className='list'>
            <div className="allT">
               {
                  todos.map(e => {
                     return <div className='item'><input type="checkbox" name="" className="check" /> {e}</div>
                  })
               }
            </div>
            <div className='compT'>
               <p className='head'>Show Completed To-Dos</p>
               <div className='list2'>
                  {

                  }
               </div>
            </div>
         </div>
      </div>
   )
}

import React, { useEffect, useState } from 'react';
import "./todo.css";
import TodoList from './TodoList';

export default function Todo() {
   const [todos, setTodos] = useState([]);
   const [checked, setChecked] = useState(new Array(todos.length).fill(false));

   const addItem = (data) => {
      // console.log(data);
      setTodos([...todos, data]);
      console.log(checked);
   }

   const checkFunc = (position) => {
      const updated = checked.map((e, index) =>
         index === position ? !e : e
      );
      // console.log(todos);
      // console.log(updated);
      setChecked(updated);
   }

   return (
      <div className='todo'>
         <h1>Todo List</h1>
         <TodoList addItem={addItem} />
         <div className='list'>
            <div className="allT">
               {
                  todos.map((e, index) => {
                     return <div className={checked === true ? "itemChecked" : 'item'}><input onChange={() => { checkFunc(index) }} type="checkbox" className="check" /> {e.title}</div>
                  })
               }
            </div>
            <div className='compT'>
               <button className='btn2'>Show Completed To-Dos</button>
               <div className='list2'>
                  {

                  }
               </div>
            </div>
         </div>
      </div>
   )
}

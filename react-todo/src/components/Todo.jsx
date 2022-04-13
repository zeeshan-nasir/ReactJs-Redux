import React, { useState } from 'react';
import "./todo.css";
import TodoList from './TodoList';

export default function Todo() {
   const [todos, setTodos] = useState([]);
   // const [doneTodos, setDoneTodos] = useState(todos.filter(item => {
   //    return item.status === true;
   // }));


   // For data addition

   const addItem = (data) => {
      // console.log(data);
      setTodos([...todos, data]);
      // console.log(todos);
   }


   // For List deletion

   const deletion = (position) => {
      todos.splice(position, 1);
      setTodos([...todos]);
   }


   // For checked feature

   const checkFunc = (item) => {
      item.status = !item.status;
      // console.log(todos);
      setTodos([...todos]);
   }


   return (
      <div className='todo'>
         <h1>Todo List</h1>
         <TodoList addItem={addItem} />
         <div className='list'>
            <div className="allT">
               {
                  todos.map((item, index) => {
                     return <div className={item.status === true ? "itemChecked" : 'item'}>
                        <input onChange={() => { checkFunc(item) }} type="checkbox" className="check" />
                        {item.title}
                        <button className='btn3' onClick={() => { deletion(index) }}>⁃</button>
                     </div>
                  })
               }
            </div>
            <div className='compT'>
               {/* <button className='btn2' onClick={() => { mapping() }}>Show Completed To-Dos</button> */}
               <div className='list2'>
                  {/* {
                     function mapping() {
                        doneTodos.map((item, index) => {
                           return <div className="itemChecked">
                              <input checked type="checkbox" className="check" />
                              {item.title}
                              <button className='btn3' onClick={() => { deletion(index) }}>⁃</button>
                           </div>
                        })
                     }
                  } */}
               </div>
            </div>
         </div>
      </div>
   )
}

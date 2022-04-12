import React, { useState } from 'react';

const TodoList = ({ addItem }) => {
   const [text, setText] = useState("");

   return (
      <div className='lower'>
         <input onChange={e => {
            setText(e.target.value)
         }}
            onKeyPress={e => {
               if (e.key === "Enter") {
                  addItem(text);
               }
            }} className='input' type="text" placeholder='Write Something' />
         <button onClick={() => { addItem(text) }}>Add</button>
      </div>
   )
}

export default TodoList;



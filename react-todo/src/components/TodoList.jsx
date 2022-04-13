import { useState } from 'react';

const TodoList = ({ addItem }) => {
   const [text, setText] = useState("");

   return (
      <div className='lower'>
         <input onChange={e => {
            setText(e.target.value)
         }}
            onKeyPress={e => {
               if (e.key === "Enter") {
                  const data = {
                     title: text,
                     status: false
                  };
                  addItem(data);
               }
            }} className='input' type="text" placeholder='Write Something' />
         <button onClick={() => {
            const data = {
               title: text,
               status: false
            };
            addItem(data);
         }} className="btn1">Add</button>
      </div>
   )
}

export default TodoList;



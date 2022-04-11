import { useState } from 'react';

export default function TodoInput({ getData }) {
   const [text, setText] = useState("");

   return (
      <div>
         <input onChange={(e) => {
            setText(e.target.value);
         }}
            type="text" placeholder='Enter Todo' />
         <button onClick={() => { getData(text) }}>Add todo</button>
      </div>
   )
}

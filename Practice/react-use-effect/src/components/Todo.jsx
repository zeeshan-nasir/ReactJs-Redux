import { useState } from 'react'
import TodoInput from './TodoInput'

export default function Todo() {
   const [totdosList, setTodosList] = useState([]);

   const getData = (todo) => {
      setTodosList([...totdosList, todo]);
   }

   return (
      <div>
         <TodoInput getData={getData} />
         {totdosList.map(e => {
            return <div>{e}</div>
         })};
      </div>
   )
}

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/actions";
import { nanoid } from "nanoid";

const TodoList = () => {
   const [text, setText] = useState("");

   const dispatch = useDispatch();

   const handleChange = (e) => {
      setText(e.target.value);
   };

   const handleAddition = () => {
      let id = nanoid(2);
      dispatch(
         addTodo({
            title: text,
            status: false,
            id: id,
         })
      );
   };

   return (
      <div className="lower">
         <input
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Write Something"
         />
         <button onClick={handleAddition} className="btn1">
            Add
         </button>
      </div>
   );
};

export default TodoList;

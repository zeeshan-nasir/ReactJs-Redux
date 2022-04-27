import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../Redux/actions";

const AllTodos = () => {
   const todos = useSelector((store) => store.todos);
   // console.log(todos);

   const dispatch = useDispatch();

   const handleDeletion = (id) => {
      dispatch(
         deleteTodo({
            title: id,
         })
      );
   };

   const handleToggle = (id) => {
      dispatch(
         toggleTodo({
            title: id,
         })
      );
   };

   return (
      <div className="allT">
         {todos.map((item, index) => {
            return (
               <div
                  key={index}
                  className={item.status === true ? "itemChecked" : "item"}
               >
                  <input
                     onChange={() => {
                        handleToggle(item.id);
                     }}
                     type="checkbox"
                     className="check"
                  />
                  <Link to={`/todo/${index}`} className="listText">
                     {item.title}
                  </Link>
                  <button
                     className="btn3"
                     onClick={() => {
                        handleDeletion(item.id);
                     }}
                  >
                     ⁃
                  </button>
               </div>
            );
         })}
      </div>
   );
};

export default AllTodos;

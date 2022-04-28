import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../Redux/Todo/actions";

const DoneTodos = () => {
   const dispatch = useDispatch();

   const todos = useSelector((store) => store.todos.todos);

   const handleDeletion = (id) => {
      dispatch(
         deleteTodo({
            id: id,
         })
      );
   };

   return (
      <div className="list2">
         {todos
            .filter((e) => {
               return e.status === true;
            })
            .map((item) => {
               return (
                  <div key={item.id} className="itemChecked">
                     <input checked type="checkbox" className="check" />
                     {item.title}
                     <button
                        className="btn3"
                        onClick={() => handleDeletion(item.id)}
                     >
                        ⁃
                     </button>
                  </div>
               );
            })}
      </div>
   );
};

export default DoneTodos;

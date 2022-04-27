import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../Redux/actions";

const DoneTodos = () => {
   const dispatch = useDispatch();
   const todos = useSelector((store) => store.todos);
   const handleDeletion = (title) => {
      dispatch(
         deleteTodo({
            title: title,
            status: false,
         })
      );
   };

   return (
      <div className="list2">
         {todos
            .filter((e) => {
               return e.status === true;
            })
            .map((item, index) => {
               return (
                  <div key={index} className="itemChecked">
                     <input checked type="checkbox" className="check" />
                     {item.title}
                     <button
                        className="btn3"
                        onClick={() => handleDeletion(item.title)}
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

import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { deleteTodo, toggleTodo } from "../Redux/Todo/actions";
import "./todoDetails.css";

export default function SingleTodo() {
   const dispatch = useDispatch();
   const { id } = useParams();

   const userAuth = localStorage.getItem("auth");

   let todo = useSelector((store) => {
      return store.todos.todos.filter((e) => {
         return e.id === id;
      });
   });

   const handleDeletion = (id) => {
      dispatch(
         deleteTodo({
            id: id,
         })
      );
   };

   const handleToggle = (id) => {
      dispatch(
         toggleTodo({
            id: id,
         })
      );
   };

   if (userAuth === false || userAuth === null) {
      return <Navigate to={"/login"} replace={false} />;
   }

   return (
      <div className="detailCard">
         {todo.length === 1 ? (
            <div className="detailCard1">
               <input
                  type="checkbox"
                  className="check1"
                  onChange={() => handleToggle(id)}
               ></input>
               <div>
                  <h2>Todo: {todo[0].title}</h2>
                  <h2>Status: {todo[0].status ? "Complete" : "Incomplete"}</h2>
               </div>
               <button className="detailBtn" onClick={() => handleDeletion(id)}>
                  Delete
               </button>
            </div>
         ) : (
            <h1>Todo Deleted</h1>
         )}
      </div>
   );
}

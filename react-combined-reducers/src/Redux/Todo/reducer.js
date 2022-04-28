import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actions";

const init = { todos: [] };

export const todoReducer = (store = init, action) => {
   switch (action.type) {
      case ADD_TODO:
         return { ...store, todos: [...store.todos, action.payload] };
      case DELETE_TODO:
         return {
            ...store,
            todos: [
               ...store.todos.filter((e) => {
                  return e.id !== action.payload.id;
               }),
            ],
         };
      case TOGGLE_TODO:
         return {
            ...store,
            todos: [
               ...store.todos.map((e) => {
                  if (e.id === action.payload.id) {
                     e.status = !e.status;
                  }
                  return e;
               }),
            ],
         };

      default:
         return { ...store };
   }
};

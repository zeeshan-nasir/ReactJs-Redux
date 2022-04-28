import { ADD_TODO, DELETE_TODO } from "./action";

const init = { todos: [] };

export const todoReducer = (store = init, { type, payload }) => {
   switch (type) {
      case ADD_TODO:
         return { ...store, todos: [...store.todos, payload] };
      case DELETE_TODO:
         return {
            ...store,
            todos: [
               ...store.todos.filter((e) => {
                  return e.title !== payload.title;
               }),
            ],
         };
      default:
         return store;
   }
};

import { ADD_TODO, ADD_COUNT } from "./actions.js";

// How to update store

export const reducer = (store, action) => {
   switch (action.type) {
      case ADD_COUNT:
         return { ...store, counter: store.counter + action.payload };
      case ADD_TODO:
         return { ...store, todos: [...store.todos, action.payload] };
      default:
         return { ...store };
   }
};

import { ADD_TODO } from "./actions.js";

export const reducer = (store, action) => {
   switch (action.type) {
      case ADD_TODO:
         return { ...store, todos: [...store.todos, action.payload] };
   }
};

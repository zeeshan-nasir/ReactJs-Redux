import { ADD_COUNT, ADD_TODO, DELETE_TODO } from "./action";

export const counterReducer = (store, { type, payload }) => {
   switch (type) {
      case ADD_COUNT:
         return { ...store, counter: store.counter + payload };
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

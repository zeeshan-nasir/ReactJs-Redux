import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer, { todos: [] });

store.subscribe(() => {
   console.log("Subscriber:", store.getState());
});

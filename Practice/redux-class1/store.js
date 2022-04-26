import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer.js";
import { addTodo, ADD_COUNT } from "./actions.js";

const initState = {
   counter: 0,
   todos: [],
};

const store = createStore(reducer, initState);

// Examples

console.log(store.getState());

store.dispatch({ type: ADD_COUNT, payload: 1 });

console.log(store.getState());

store.dispatch(addTodo("Learn TypeScript"));

console.log(store.getState());

store.dispatch(addTodo("Learn Redux"));

console.log(store.getState());

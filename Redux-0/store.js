import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer.js";

const initState = {
   todos: [],
};

const store = createStore(reducer, initState);

export { initState, store };

import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "./Counter/reducer";
import { todoReducer } from "./Todos/reducer";

const rootReducer = combineReducers({
   counter: counterReducer,
   todos: todoReducer,
});

export const store = createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
   console.log("Subscriber:", store.getState());
});

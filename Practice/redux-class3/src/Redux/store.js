import {
   applyMiddleware,
   combineReducers,
   legacy_createStore as createStore,
} from "redux";
import { counterReducer } from "./Counter/reducer";
import { todoReducer } from "./Todos/reducer";

const rootReducer = combineReducers({
   counter: counterReducer,
   todos: todoReducer,
});

const middleware = (store) => (next) => (action) => {
   if (typeof action === "function") {
      return action(store.dispatch);
   }
   next(action);
};

export const store = createStore(
   rootReducer,
   applyMiddleware(middleware)
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
   console.log("Subscriber:", store.getState());
});

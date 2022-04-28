import { combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./Auth/reducer";
import { todoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({
   todos: todoReducer,
   auth: authReducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
   console.log("Subscriber:", store.getState());
});

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

const addTodo = (data) => {
   return {
      type: ADD_TODO,
      payload: data,
   };
};

const deleteTodo = (data) => {
   return {
      type: DELETE_TODO,
      payload: data,
   };
};

const toggleTodo = (data) => {
   return {
      type: TOGGLE_TODO,
      payload: data,
   };
};

export { ADD_TODO, DELETE_TODO, TOGGLE_TODO, addTodo, deleteTodo, toggleTodo };

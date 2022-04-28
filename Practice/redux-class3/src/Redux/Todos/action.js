// Action types

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action creator

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

export { addTodo, deleteTodo, ADD_TODO, DELETE_TODO };

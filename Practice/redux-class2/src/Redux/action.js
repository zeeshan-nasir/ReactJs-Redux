// Action types

const ADD_COUNT = "ADD_COUNT";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action creator

const addCount = (data) => {
   return {
      type: ADD_COUNT,
      payload: data,
   };
};

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

export { addCount, addTodo, deleteTodo, ADD_COUNT, ADD_TODO, DELETE_TODO };

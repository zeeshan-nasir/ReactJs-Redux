// Action types

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SORT = "SORT";

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

const getTodos = () => async (dispatch) => {
   const data = await fetch("http://localhost:8080/todos").then((x) =>
      x.json()
   );
   dispatchEvent(addTodo(data));
};

const sort = (by) => {
   return {
      type: SORT,
      payload: by,
   };
};

export { addTodo, deleteTodo, getTodos, sort, ADD_TODO, DELETE_TODO, SORT };

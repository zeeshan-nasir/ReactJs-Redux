const ADD_TODO = "ADD_TODO";

const addTodo = (title) => {
   return {
      title: title,
      status: false,
   };
};

export { ADD_TODO, addTodo };

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (title, status) => {
   return {
      type: ADD_TODO,
      payload: {
         title: title,
         status: status,
      },
   };
};

const deleteTodo = (title, status) => {
   return {
      type: DELETE_TODO,
      payload: {
         title: title,
         status: status,
      },
   };
};

function reducer(store, action) {
   switch (action.type) {
      case ADD_TODO:
         return { ...store, todos: [...store.todos, action.payload] };
      case DELETE_TODO:
         return {
            ...store,
            todos: [
               ...store.todos.filter((e) => {
                  return e.title !== action.payload.title;
               }),
            ],
         };
      default:
         return store;
   }
}

const initState = {
   todos: [],
};

const store = Redux.createStore(reducer, initState);

document.getElementById("btn").addEventListener("click", () => {
   document.getElementById("appendDiv").innerHTML = null;

   let todo = document.getElementById("todoInput").value;
   store.dispatch(addTodo(todo, false));

   let appendDiv = document.getElementById("appendDiv");
   let data = store.getState().todos;
   console.log(data);

   showData(data);
});

const showData = (data) => {
   data.map((e) => {
      const div = document.createElement("div");
      div.id = "todocard";

      const inp = document.createElement("input");
      inp.setAttribute("type", "checkbox");

      inp.addEventListener("change", () => {
         console.log(e.title);
         store.dispatch(deleteTodo(e.title, true));
         // console.log(store.getState().todos);

         document.getElementById("appendDiv").innerHTML = null;

         let newData = store.getState().todos;
         showData(newData);
      });

      const text = document.createElement("p");
      text.id = "cardText";

      text.innerHTML = e.title;

      div.append(inp, text);
      appendDiv.append(div);
   });
};

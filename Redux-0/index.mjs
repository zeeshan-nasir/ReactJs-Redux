const ADD_TODO = "ADD_TODO";

const addTodo = (title) => {
   return {
      type: ADD_TODO,
      payload: {
         title: title,
         status: false,
      },
   };
};

function reducer(store, action) {
   switch (action.type) {
      case ADD_TODO:
         return { ...store, todos: [...store.todos, action.payload] };
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
   store.dispatch(addTodo(todo));

   let appendDiv = document.getElementById("appendDiv");
   let data = store.getState().todos;
   console.log(data);

   data.map((e) => {
      const div = document.createElement("div");
      div.id = "todocard";

      const inp = document.createElement("input");
      inp.setAttribute("type", "checkbox");

      const text = document.createElement("p");
      text.id = "cardText";

      text.innerHTML = e.title;

      div.append(inp, text);
      appendDiv.append(div);
   });
});

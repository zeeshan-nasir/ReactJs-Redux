const incCount = { type: "INC_COUNT", payload: 1 };

const reducer = (store, action) => {
   switch (action.type) {
      case "INC_COUNT":
         return { counter: store.counter + action.payload };
      default:
         return { ...store };
   }
};

class Store {
   constructor(reducer, init) {
      this.reducer = reducer;
      this.store = init;
   }

   getState() {
      return this.store;
   }

   dispatch(action) {
      this.store = this.reducer(this.store, action);
   }
}

const init = { counter: 0 };

const store = new Store(reducer, init);

console.log(store.getState());

store.dispatch(incCount);

console.log(store.getState());

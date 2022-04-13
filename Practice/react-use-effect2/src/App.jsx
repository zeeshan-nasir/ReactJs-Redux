// import { useEffect, useState } from 'react';
import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
// import Hello from './components/Hello';

// function App() {
//    const [show, setShow] = useState(true);

//    console.log("Before");

//    // effects are synchronous

//    useEffect(() => {
//       console.log("Inside effect 1");
//    });

//    useEffect(() => {
//       console.log("Inside effect 2");
//    });

//    console.log("After");

//    return (
//       <div className="App">
//          {show ? <Hello /> : null}
//          <button onClick={() => { setShow(!show) }}>Toggle</button>
//       </div>
//    );
// }


// function App() {
//    const [todos, setTodos] = useState([]);

//    useEffect(() => {
//       // const getData = async () => {
//       //    let fetched = await fetch("http://localhost:8080/todos");
//       //    let data = await fetched.json();
//       //    setTodos(data);
//       // }

//       // getData();

//       fetch("http://localhost:8080/todos")
//          .then((d) => d.json())
//          .then((data) => {
//             setTodos(data);
//          });
//    }, []);

//    return (
//       <div className="App">
//          {todos.map(todo =>
//             <div>{todo.id}. {todo.title}</div>
//          )}
//       </div>
//    );
// }


// function App() {
//    const [counter, setCounter] = useState(0);
//    const [age, setAge] = useState(0);

//    useEffect(() => {
//       console.log("Inside Effect 1");
//    }); // no array given so will change everytime

//    useEffect(() => {
//       console.log("Inside Effect 2");
//    }, []); // array given but no dependency given so will not change at all

//    useEffect(() => {
//       console.log("Inside Effect 3");
//    }, [age]);  //only when stated dependency changes

//    return (
//       <div className="App">
//          <h3>Counter</h3>
//          <h3>{counter}</h3>
//          <button onClick={() => { setCounter(counter + 1) }}>Add 1</button>
//          <button onClick={() => { setAge(age + 1) }}>Change age</button>
//       </div>
//    );
// }


function App() {
   const [show, setShow] = useState(true);

   return (
      <div className="App">
         {show ? <Todos /> : null}
         <button onClick={() => { setShow(!show) }}>{show ? "Hide" : "Show"}</button>
      </div>
   );
}

export default App;

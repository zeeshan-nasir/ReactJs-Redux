import './App.css';
import Todo from './components/Todo';

function App() {
   return (
      <div className="App">
         <Todo />
      </div>
   );
}




// ~~~~~Parent to child~~~~~

// function App() {
//    const data = "hello c1";

//    return (
//       <div className="App">
//          <First data={data} />
//          <Second />
//       </div>
//    );
// }

// const First = ({ data }) => {
//    console.log("Received from parent", data);
//    return (
//       <div>
//          First child
//       </div>
//    )
// }

// const Second = () => {
//    return (
//       <div>
//          Second child
//       </div>
//    )
// }


// ~~~~~Child to parent~~~~~

// function App() {
//    const handleChange = (value) => {
//       console.log("hello", value);
//    }

//    return First(handleChange);
// }

// const First = (handleChange) => {
//    const data = "test";
//    handleChange(data);
// }


// ~~~~~Child to child~~~~~

// function App() {
//    const [message, setMessage] = useState("");

//    const getData = (data) => {
//       console.log("Got data form Child:", data);
//       setMessage(data);
//    }

//    return (
//       <div className='App'>
//          <First dataFn={getData} />
//          <Second message={message} />
//       </div>
//    )
// }

// const First = ({ dataFn }) => {
//    const data = "Hello c1";

//    return (
//       <div>
//          First child
//          <button onClick={() => { dataFn(data) }}>Send Data</button>
//       </div>
//    )
// }

// const Second = ({ message }) => {
//    console.log("Got data from sibling:", message);

//    return (
//       <div>
//          Second child, {message} {message}
//       </div>
//    )
// }


export default App;

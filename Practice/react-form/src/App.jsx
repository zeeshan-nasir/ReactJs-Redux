// import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  // const [count, setCount] = useState(10);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount((prev) => {
  //       return prev + 1;
  //     });
  //   }, 1000);
  // })

  return (
    <div className="App">
      <Form />

      {/* <h1>Counter: {count}</h1> */}
    </div>
  );
}

export default App;

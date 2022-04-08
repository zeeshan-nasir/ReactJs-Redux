import { useState } from 'react';
import './App.css';
// import { Category } from './components/Category';


function App() {
   const navbar = [
      {
         image: "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
         title: "Top Offers"
      },
      {
         image: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
         title: "Grocery"
      }
   ]

   const [counter, setCounter] = useState(0);

   // const addFunc = () => {
   //     if (counter >= 10) {
   //         return;
   //     }
   //     setCounter(counter + 1);
   // };

   // const subFunc = () => {
   //     if (counter <= 0) {
   //         return;
   //     }
   //     setCounter(counter - 1);
   // };

   const handleChange = (value) => {
      setCounter(counter + value)
   }

   return (
      < div className="App" >
         {/* {navbar.map(e => (
        <Category image={e.image} title={e.title} />
      ))} */}

         <h3> Counter: {counter}</h3>
         <button onClick={() => handleChange(1)}>Add 1</button>
         <button onClick={() => handleChange(-1)}>Sub 1</button>
         <div>Number is {counter < 0 ? "even" : "odd"}</div>
      </div >
   );
}

export default App;

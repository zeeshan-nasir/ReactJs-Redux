import './App.css';

function App() {
  const food = ["pizza", "burger", "dosa", "zinger"];
  return (
    <div className="app">
      <div className="card">
        <h1 className="redText">Hello React</h1>
        <input id="data" />
        <button id="btn">Click Me!</button>
      </div>
      <div>
        {food.map(e => {
          return <Foodtype name={e} />
        })}
      </div>
    </div>
  );
}

const Foodtype = (props) => {
  return <p>My favourite food is {props.name} </p>;
}


// function App() {
//   const food = 'Pizza 🍕';
//   const age = 17;
//   const name = 'Adnan';
//   const games = ['Dota 2', 'CS:GO', 'PUBG', 'PUBGM', 'A'];
//   return (
//     <div className="App">
//       <h3>
//         My name is {name}. My age is {age}, and my favourite food is {food}. I
//         am {age > 18 ? 'eligible' : 'ineligible'} for license.
//       </h3>
//       <div>
//         {games.map((e) => {
//           return <Games key={e} name={e} />;
//         })}
//       </div>
//     </div>
//   );
// }

// const Games = (props) => {
//   // console.log(props.name)
//   return <p key={props.name}>{props.name}</p>;
// };

export default App;

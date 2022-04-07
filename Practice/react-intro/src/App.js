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

export default App;

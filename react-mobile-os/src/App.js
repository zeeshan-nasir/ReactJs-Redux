import './App.css';

function App() {
  const os = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const company = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      {os.map(e => {
        return <Oper name={e} />
      })}
      <h1>Mobile Manufacturers</h1>
      {company.map(e => {
        return <Oper name={e} />
      })}
    </div>
  );
}

const Oper = (props) => {
  return <li id="list">{props.name}</li>
}

export default App;

import './App.css';

function App() {
  const os = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const company = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div className="App">
      <Heading title="Mobile Operating System" />
      {os.map(e => {
        return <List name={e} />
      })}

      <Heading title="Mobile Manufacturers" />
      {company.map(e => {
        return <List name={e} />
      })}
    </div>
  );
}

const Heading = (props) => {
  return <h1>{props.title}</h1>
}

const List = (props) => {
  return <li className="list">{props.name}</li>
}

export default App;

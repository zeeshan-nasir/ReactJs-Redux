import './App.css';

function App() {
  let linksArr = ["Services", "Projects", "About"];

  return (
    <div className="App">
      <Logo />
      <div>
        {linksArr.map(e => {
          return <Links name={e} />
        })}
      </div>
      <Button />
    </div>
  );
}

const Logo = () => {
  return <h2>LOGOBAKERY</h2>;
}

const Links = (props) => {
  return <a id="links" href="/">{props.name}</a>;
}

const Button = () => {
  return <button id="btn">Contact</button>;
}

export default App;

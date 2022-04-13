import './App.css'
import Timer from './components/Timer'

function App() {
   let start = 0;
   let end = 12;

   return (
      <div className="App">
         <Timer start={start} end={end} />
      </div>
   )
}

export default App;

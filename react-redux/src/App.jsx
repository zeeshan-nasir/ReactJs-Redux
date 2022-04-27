import "./App.css";
import Todo from "./components/Todo";
import TodoDetails from "./components/TodoDetails";
import { Routes, Route } from "react-router-dom";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Todo />}></Route>
            <Route path="/todo/:id" element={<TodoDetails />}></Route>
         </Routes>
      </div>
   );
}

export default App;

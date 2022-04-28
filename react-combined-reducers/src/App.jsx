import "./App.css";
import Todo from "./components/Todo";
import TodoDetails from "./components/TodoDetails";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Todo />}></Route>
            <Route path="/todo/:id" element={<TodoDetails />}></Route>
            <Route path="/login" element={<Login />}></Route>
         </Routes>
      </div>
   );
}

export default App;

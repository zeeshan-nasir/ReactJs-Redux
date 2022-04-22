import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import PrivateComponent from "./components/PrivateRoute";
import Login from "./components/Login";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/users" element={<UsersList />}></Route>
            <Route
               path="/users/:id"
               element={
                  <PrivateComponent>
                     <UserDetails />
                  </PrivateComponent>
               }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
         </Routes>
      </div>
   );
}

export default App;

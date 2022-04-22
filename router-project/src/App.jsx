import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Store from "./components/Store";
import Mac from "./components/Mac";
import IPad from "./components/Ipad";
import Iphone from "./components/Iphone";
import About from "./components/About";
import FaqPage from "./components/FaqPage";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import PrivateComponent from "./components/PrivateComponent";

function App() {
   return (
      <div className="App">
         <div className="height">
            <Navbar />
            <Banner />
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/store" element={<Store />}></Route>
               <Route path="/mac" element={<Mac />}></Route>
               <Route path="/ipad" element={<IPad />}></Route>
               <Route path="/iphone" element={<Iphone />}></Route>
               <Route path="/about" element={<About />}></Route>
               <Route path="/contact" element={<Contact />}></Route>
               <Route path="/faq" element={<FaqPage />}></Route>
               <Route path="/login" element={<Login />}></Route>
               <Route
                  path="/store/:id"
                  element={
                     <PrivateComponent>
                        <ProductDetails />
                     </PrivateComponent>
                  }
               ></Route>
            </Routes>
         </div>
         <Footer />
      </div>
   );
}

export default App;

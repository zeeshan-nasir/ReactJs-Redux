import "./form.css";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const Form = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <div style={theme} className="formDiv">
         <h1>Enter Employee Details</h1>
         <form className="form">
            <input
               type="text"
               id="name"
               className="name"
               placeholder="Enter name"
            />
            <input
               type="text"
               id="age"
               className="age"
               placeholder="Enter age"
            />
            <input
               type="text"
               id="address"
               className="address"
               placeholder="Enter address"
            />
            <label htmlFor="">Select Department: </label>
            <select id="department" className="dep">
               <option value="">- - - - - - - - - -</option>
               <option value="IA">IA</option>
               <option value="Teaching">Teaching</option>
               <option value="Placements">Placements</option>
               <option value="Management">Management</option>
            </select>
            <input
               type="text"
               id="salary"
               className="salary"
               placeholder="Enter salary"
            />
            <div className="statusBox">
               <label htmlFor="">Martial Status: </label>
               <label htmlFor="">Married</label>
               <input
                  type="checkbox"
                  id="status"
                  value="Married"
                  className="married"
               />
               <label htmlFor="">Unmarried</label>
               <input
                  type="checkbox"
                  id="status"
                  value="Unmarried"
                  className="unmarried"
               />
            </div>
            <input type="submit" className="submit" />
         </form>
      </div>
   );
};

export default Form;

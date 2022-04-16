import React, { useState } from "react";
import "./form.css";

const Form = () => {
   const [form, setForm] = useState({
      name: "",
      age: "",
      address: "",
      department: "",
      salary: "",
      status: "",
   });

   const handleChange = (e) => {
      // console.log(e.target);
      const { id, value } = e.target;

      setForm({
         ...form,
         [id]: value,
      });
   };

   const handleSubmit = (e) => {
      // e.preventDefault();

      fetch("http://localhost:8080/data", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(form),
      });
   };

   return (
      <div className="formDiv">
         <h1>Enter Employee Details</h1>
         <form onSubmit={handleSubmit} className="form">
            <input
               onChange={handleChange}
               type="text"
               id="name"
               className="name"
               placeholder="Enter name"
            />
            <input
               onChange={handleChange}
               type="text"
               id="age"
               className="age"
               placeholder="Enter age"
            />
            <input
               onChange={handleChange}
               type="text"
               id="address"
               className="address"
               placeholder="Enter address"
            />
            <label htmlFor="">Select Department: </label>
            <select onChange={handleChange} id="department" className="dep">
               <option value="">- - - - - - - - - -</option>
               <option value="IA">IA</option>
               <option value="Teaching">Teaching</option>
               <option value="Placements">Placements</option>
               <option value="Management">Management</option>
            </select>
            <input
               onChange={handleChange}
               type="text"
               id="salary"
               className="salary"
               placeholder="Enter salary"
            />
            <div className="statusBox">
               <label htmlFor="">Martial Status: </label>
               <label htmlFor="">Married</label>
               <input
                  onChange={handleChange}
                  type="checkbox"
                  id="status"
                  value="Married"
                  className="married"
               />
               <label htmlFor="">Unmarried</label>
               <input
                  onChange={handleChange}
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

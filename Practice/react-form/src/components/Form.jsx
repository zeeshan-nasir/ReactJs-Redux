import React, { useState } from "react";

const Form = () => {
   const [formData, setFormData] = useState({
      userName: "",
      age: "",
      email: ""
   });

   const handleChange = (e) => {
      const { id, value } = e.target; // Object destructuing
      console.log(id, value);

      setFormData({
         ...formData,
         [id]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);

      fetch("http://localhost:8080/data", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(formData),
      });
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               onChange={handleChange}
               type="text"
               id="userName"
               placeholder="Enter Username"
            />
            <input
               onChange={handleChange}
               type="text"
               id="age"
               placeholder="Enter Age"
            />
            <input
               onChange={handleChange}
               type="text"
               id="email"
               placeholder="Enter email"
            />
            <input type="submit" value="submit" />
         </form>
      </div>
   );
};

export default Form;

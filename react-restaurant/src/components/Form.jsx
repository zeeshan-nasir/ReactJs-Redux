import React, { useState } from "react";

const Form = () => {
   const [form, setForm] = useState({
      name: "",
      cuisine: "",
      cost: "",
      minPrice: "",
      paymentMethods: "",
      rating: "",
      votes: "",
      reviews: "",
      image: "",
   });

   // To fetch and add the form data

   const handleChange = (e) => {
      const { name, value } = e.target;

      // console.log(e.target.value);
      setForm({
         ...form,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      // e.preventDefault();
      // console.log(form);

      fetch("http://localhost:8080/data", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(form),
      });
   };

   return (
      <div>
         <div className="formDiv">
            <h1>Enter Restaurant Details</h1>
            <form onSubmit={handleSubmit} className="form">
               <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Enter name"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  name="cuisine"
                  placeholder="Enter cuisine"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  name="cost"
                  placeholder="Enter cost"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  name="minPrice"
                  placeholder="Enter price"
               />
               <select onChange={handleChange} name="paymentMethods">
                  <option value="">Payment Methods</option>
                  <option value="Accepts card and COD payments">
                     Accepts card and COD payments
                  </option>
                  <option value="Accepts card payments only">
                     Accepts card payments only
                  </option>
               </select>
               <input
                  onChange={handleChange}
                  type="text"
                  name="rating"
                  placeholder="Enter rating"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  name="votes"
                  placeholder="Number of votes"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  name="reviews"
                  placeholder="Number of reviews"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  name="image"
                  placeholder="Enter url"
               />
               <input type="submit" className="submit" />
            </form>
         </div>
      </div>
   );
};

export default Form;

import React, { useEffect, useState } from "react";
import "./rest.css";

const RestaurantDetails = () => {
   const [data, setData] = useState([]);

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

   // To fetch and update the data

   // const getData = async () => {
   //    let fetched = await fetch("http://localhost:8080/data");
   //    fetched = await fetched.json();
   //    // console.log("fetched:", fetched);
   //    setData([...data, ...fetched]);
   // };

   useEffect(() => {
      // getData();
   }, []);

   // To fetch and add the form data

   const handleChange = (e) => {
      const { id, value } = e.target;

      console.log(e.target.value);
      setForm({
         ...form,
         [id]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(form);

      fetch("http://localhost:8080/data", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(form),
      });
   };

   // To sort data

   const handleSort = (stars) => {
      let sorted = data.filter((e) => {
         return e.rating > stars;
      });

      setData([...sorted]);
   };

   return (
      <div>
         <div className="formDiv">
            <h1>Enter Restaurant Details</h1>
            <form onSubmit={handleSubmit} className="form">
               <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  placeholder="Enter name"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  id="cuisine"
                  placeholder="Enter cuisine"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  id="cost"
                  placeholder="Enter cost"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  id="minPrice"
                  placeholder="Enter price"
               />
               <select onChange={handleChange} id="paymentMethods">
                  <option value="">Payment Methods</option>
                  <option value="Accepts online and COD payments">
                     Accepts online and COD payments
                  </option>
                  <option value="Accepts online payments only">
                     Accepts online payments only
                  </option>
               </select>
               <input
                  onChange={handleChange}
                  type="text"
                  id="rating"
                  placeholder="Enter rating"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  id="votes"
                  placeholder="Number of votes"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  id="reviews"
                  placeholder="Number of reviews"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  id="image"
                  placeholder="Enter url"
               />
               <input type="submit" className="submit" />
            </form>
         </div>

         {/* Sort buttons */}

         <div className="btnDiv">
            <button className="oneBtn" onClick={handleSort(1)}>
               1 star
            </button>
            <button className="twoBtn" onClick={handleSort(2)}>
               2 star
            </button>
            <button className="threeBtn" onClick={handleSort(3)}>
               3 star
            </button>
            <button className="fourBtn" onClick={handleSort(4)}>
               4 star
            </button>
         </div>

         <div className="cardBox">
            {data.map((e) => {
               return (
                  <div className="card">
                     <div className="upperDiv">
                        <div className="imageDiv">
                           <img src={e.image} alt="" />
                        </div>
                        <div className="dataDiv">
                           <p className="name">{e.name}</p>
                           <p className="greyText">{e.cuisine}</p>
                           <p className="greyText">Cost {e.cost} for one</p>
                           <p className="blackText">Min ₹{e.minPrice}</p>
                           <p className="blackText">{e.paymentMethods}</p>
                        </div>
                        <div className="ratingDiv">
                           <p className="rating">{e.rating}</p>
                           <p className="votes">{e.votes} votes</p>
                           <p className="votes">{e.reviews} reviews</p>
                        </div>
                     </div>
                     <div className="lowerDiv">
                        <p>Order Online</p>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default RestaurantDetails;

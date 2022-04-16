import React, { useEffect, useState } from "react";
import "./rest.css";

const RestaurantDetails = () => {
   const [data, setData] = useState([]);
   const [flags, setFlags] = useState([false, false, false, false]);
   const [paymentFlags, setPaymentFlags] = useState([false, false, false]);
   const [sortFlags, setSortFlags] = useState([false, false]);

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

   const getData = async () => {
      let fetched = await fetch("http://localhost:8080/data");
      fetched = await fetched.json();
      // console.log("fetched:", fetched);
      setData(fetched);
   };

   useEffect(() => {
      getData();
   }, [setData]);

   // To fetch and add the form data

   const handleChange = (e) => {
      const { name, value } = e.target;

      console.log(e.target.value);
      setForm({
         ...form,
         [name]: value,
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

   // To filter data

   const handleFilter = (stars) => {
      flags[stars - 1] = !flags[stars - 1];
      setFlags(flags);
      // console.log(flags);

      if (flags[stars - 1] === true) {
         let filtered = data.filter((e) => {
            return e.rating > stars;
         });
         // console.log(filtered);
         setData(filtered);
      } else {
         getData();
      }
   };

   // To filter data as per payment type

   const handlePayment = (index, type) => {
      paymentFlags[index] = !paymentFlags[index];
      setPaymentFlags(paymentFlags);
      // console.log(paymentFlags);

      if (paymentFlags[index] === true) {
         let filtered = data.filter((e) => {
            return e.paymentMethods === type;
         });
         // console.log(filtered);
         setData(filtered);
      } else {
         getData();
      }
   };

   // To sort data

   const handleSort = (type) => {
      if (type === 0) {
         let sorted = data.sort((a, b) => {
            return a.minPrice - b.minPrice;
         });
         // console.log(sorted);
         setData(sorted);
      } else {
         let sorted = data.sort((a, b) => {
            return b.minPrice - a.minPrice;
         });
         // console.log(sorted);
         setData(sorted);
      }
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

         {/* All buttons */}

         <div className="allBtns">
            {/* Filter buttons */}

            <div className="btnDiv">
               <h3>Sort as per rating:</h3>
               <button
                  className="oneBtn"
                  onClick={() => {
                     handleFilter(1);
                  }}
               >
                  1 star
               </button>
               <button
                  className="twoBtn"
                  onClick={() => {
                     handleFilter(2);
                  }}
               >
                  2 star
               </button>
               <button
                  className="threeBtn"
                  onClick={() => {
                     handleFilter(3);
                  }}
               >
                  3 star
               </button>
               <button
                  className="fourBtn"
                  onClick={() => {
                     handleFilter(4);
                  }}
               >
                  4 star
               </button>
            </div>

            {/* Payment filter buttons */}

            <div className="btnDiv">
               <h3>Sort as per payment methods:</h3>
               <button
                  className="oneBtn"
                  onClick={() => {
                     handlePayment(0, "Accepts online payments only");
                  }}
               >
                  Online
               </button>
               <button
                  className="twoBtn"
                  onClick={() => {
                     handlePayment(1, "Accepts COD payments only");
                  }}
               >
                  COD
               </button>
               <button
                  className="threeBtn"
                  onClick={() => {
                     handlePayment(2, "Accepts online and COD payments");
                  }}
               >
                  All
               </button>
            </div>

            {/* 2 person cost buttons */}

            <div className="btnDiv">
               <h3>Sort as per cost:</h3>
               <button
                  className="oneBtn"
                  onClick={() => {
                     handleSort(0);
                  }}
               >
                  L to H
               </button>
               <button
                  className="twoBtn"
                  onClick={() => {
                     handleSort(1);
                  }}
               >
                  H to L
               </button>
            </div>
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

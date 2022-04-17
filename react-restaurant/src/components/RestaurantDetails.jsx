import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Cards from "./Cards";
import Form from "./Form";
import "./rest.css";

const RestaurantDetails = () => {
   const [data, setData] = useState([]);

   // To fetch and update the data

   const getData = async () => {
      let fetched = await fetch("http://localhost:8080/data");
      fetched = await fetched.json();
      setData([...fetched, ...data]);
      return fetched;
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <div>
         <Form />
         <Buttons getData={getData} setData={setData} data={data} />
         <Cards data={data} />
      </div>
   );
};

export default RestaurantDetails;

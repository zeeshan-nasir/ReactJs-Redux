import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./store.css";

const Store = () => {
   const [data, setData] = useState([]);

   const getData = async () => {
      let fetched = await fetch("http://localhost:8080/store");
      fetched = await fetched.json();
      setData([...fetched]);
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <div className="store">
         {data.map((e) => {
            return (
               <Link key={e.id} to={`/store/${e.id}`} className="storeCards">
                  <img src={e.image} alt="" />
                  <p className="bigText">{e.model}</p>
                  <p>{e.price}</p>
               </Link>
            );
         })}
      </div>
   );
};

export default Store;

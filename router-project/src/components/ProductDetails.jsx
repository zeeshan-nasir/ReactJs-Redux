import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "./productDetails.css";

const ProductDetails = () => {
   const { id } = useParams();
   const [data, setData] = useState({});
   const { isAuth } = useContext(AuthContext);

   const fetchData = async () => {
      let fetched = await fetch(`http://localhost:8080/store/${id}`);
      fetched = await fetched.json();
      setData({ ...fetched });
   };
   console.log(data);

   useEffect(() => {
      fetchData();
   }, []);

   if (!isAuth) {
      return <Navigate to={"/login"} />;
   }
   return (
      <div className="card">
         <img src={data.image} alt="" />
         <div className="cardDetails">
            <p className="biggerText">{data.model}</p>
            <p>{data.price}</p>
            <p>{data.details}</p>
            <button className="detailsBtn">Add to cart</button>
         </div>
      </div>
   );
};

export default ProductDetails;

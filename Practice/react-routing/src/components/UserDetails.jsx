import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const UserDetails = () => {
   const { id } = useParams();
   const [data, setData] = useState({});
   const { isAuth } = useContext(AuthContext);

   const fetchData = async () => {
      let fetched = await fetch(`https://reqres.in/api/users/${id}`);
      fetched = await fetched.json();
      // console.log(fetched.data);
      setData({ ...fetched.data });
   };

   useEffect(() => {
      fetchData();
   }, []);

   if (!isAuth) {
      return <Navigate to={"/login"} />;
   }

   return (
      <div
         style={{
            border: "1px solid grey",
            display: "flex",
            flexDirection: "column",
            width: "20%",
            margin: "auto",
            marginTop: "20px",
            borderRadius: "20px",
         }}
      >
         <p
            style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <img
               style={{
                  borderRadius: "50%",
               }}
               src={data.avatar}
               alt=""
            />
         </p>
         <p>First Name: {data.first_name}</p>
         <p>Last Name: {data.last_name}</p>
         <p>Email: {data.email}</p>
      </div>
   );
};

export default UserDetails;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersList = () => {
   const [data, setData] = useState([]);

   const fetchData = async () => {
      let fetched = await fetch("https://reqres.in/api/users");
      fetched = await fetched.json();
      setData([...fetched.data]);
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div>
         {data.map((e) => {
            return (
               <p key={e.id}>
                  <Link to={`/users/${e.id}`}>
                     {e.id}. {e.first_name}
                  </Link>
               </p>
            );
         })}
      </div>
   );
};

export default UsersList;

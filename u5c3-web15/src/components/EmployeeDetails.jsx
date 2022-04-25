import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const EmployeeDetails = () => {
   const { id } = useParams();
   const [data, setData] = useState({});
   const { isAuth } = useContext(AuthContext);

   const fetchData = async () => {
      let fetched = await fetch(`http://localhost:8080/employee/${id}`);
      fetched = await fetched.json();
      setData({ ...fetched });
      console.log(fetched);
   };
   console.log(data);

   useEffect(() => {
      fetchData();
   }, []);

   if (!isAuth) {
      return <Navigate to={"/login"} />;
   }
   
   return (
      <div className="user_details">
         <img className="user_image" alt="" src={data.image} />
         <h4 className="user_name">{data.user_name}</h4>
         <span className="user_salary">{data.salary}</span>
         <span className="tasks">
            <li className="task">{data.tasks}</li>
         </span>
         Status: <b className="status">{data.status}</b>
         Title: <b className="title">{data.title}</b>
         {/* Show this button only if user is not already terminated (users status is working) */}
         {data.status === "terminated" ? null : (
            <button className="fire">Fire Employee</button>
         )}
         {/* Show this button only if user is not already team lead or terminated */}
         {data.title === "Team Lead" ? null : (
            <button className="promote">promote</button>
         )}
      </div>
   );
};

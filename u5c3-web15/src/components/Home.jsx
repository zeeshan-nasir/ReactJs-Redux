import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";

export const Home = () => {
   // create statistics for user.
   // get Total user count from DB,
   // other fields are in memory values stored in context API.
   // they will reset to 0
   // if page gets refreshed

   // thins to store in context api
   //   total: get from db,
   //   terminated: 0, // inc when user in terminated
   //   promoted: 0,// inc when user in promoted
   //   total_new: 0,// inc when a new user in created

   const [employees, setEmployees] = useState([]);

   const getData = async () => {
      let fetched = await fetch("http://localhost:8080/employee");
      fetched = await fetched.json();
      setEmployees([...fetched]);
   };

   useEffect(() => {
      getData();
   }, []);

   const { datacon } = useContext(DataContext);

   return (
      <>
         <h3 className="welcome">Welcome To employee management system</h3>
         <div className="home">
            <span>Stats</span>
            <div>
               Total Employees:
               <span className="totalemp"> {employees.length}</span>
            </div>
            <div>
               Total Terminated:{" "}
               <span className="total_terminated">{datacon.terminated}</span>
            </div>
            <div>
               Total Promoted:{" "}
               <span className="total_promoted">{datacon.promoted}</span>
            </div>
            <div>
               Total New: <span className="total_new">{datacon.total_new}</span>
            </div>
         </div>
      </>
   );
};

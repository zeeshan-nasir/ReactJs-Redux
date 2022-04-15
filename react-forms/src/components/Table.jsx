import React, { useEffect, useState } from "react";
import "./table.css";

const Table = () => {
   const [data, setData] = useState([]);

   const getData = async () => {
      let fetched = await fetch("http://localhost:8080/data");
      fetched = await fetched.json();
      console.log(fetched);
      setData([...data, ...fetched]);
   };

   useEffect(() => {
      getData();
   }, [setData]);

   return (
      <div className="tableDiv">
         <h1>Employees</h1>
         <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Martial Status</th>
               </tr>
            </thead>
            <tbody>
               {data.map((el) => {
                  return (
                     <tr>
                        <td>{el.name}</td>
                        <td>{el.age}</td>
                        <td>{el.address}</td>
                        <td>{el.department}</td>
                        <td>{el.salary}</td>
                        <td>{el.status}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};

export default Table;

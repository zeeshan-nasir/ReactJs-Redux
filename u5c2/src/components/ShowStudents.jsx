import { useEffect, useState } from "react";
import "./showStudents.css";

export const ShowStudents = () => {
   const [data, setData] = useState([]);

   const fetchData = async () => {
      let fetched = await fetch("http://localhost:8080/students");
      fetched = await fetched.json();
      setData([...data, ...fetched]);
      // console.log(fetched);
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div className="body">
         <div className="controls">
            <div>
               Sort By:{" "}
               <select
                  // select dropdown needs both value and onChange
                  className="sortby"
               >
                  <option value="first_name">First Name</option>
                  <option value="gender">Gender</option>
                  <option value="age">Age</option>
                  <option value="tenth_score">10th Score</option>
                  <option value="twelth_score">12th Score</option>
               </select>
            </div>
            <div>
               Order:
               <select
                  // select dropdown needs both value and onChange
                  className="sortorder"
               >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
               </select>
            </div>
            <button className="sort">sort</button>
         </div>
         <table className="table">
            <thead>
               <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>10th Score</th>
                  <th>12th Score</th>
                  <th>Branch</th>
               </tr>
            </thead>
            <tbody className="tbody">
               {/* populate all rows like below: */}
               {data.map((row) => {
                  return (
                     <tr className="row">
                        <td className="first_name">{row.first_name}</td>
                        <td className="last_name">{row.last_name}</td>
                        <td className="email">{row.email}</td>
                        <td className="gender">{row.gender}</td>
                        <td className="age">{row.age}</td>
                        <td className="tenth_score">{row.tenth_score}</td>
                        <td className="twelth_score">{row.twelth_score}</td>
                        <td className="preferred_branch">
                           {row.preferred_branch}
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
   const [employees, setEmployees] = useState([]);

   const getData = async () => {
      let fetched = await fetch("http://localhost:8080/employee");
      fetched = await fetched.json();
      setEmployees([...fetched]);
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <div className="list_container">
         {/* On clicking this card anywhere, user goes to user details */}
         {employees.map((e, i) => (
            <>
               <Link key={e.id} to={`/employees/${e.id}`}>
                  <div className="employee_card">
                     <img className="employee_image" src={e.image} alt="" />
                     <span className="employee_name">{e.employee_name}</span>
                     <span className="employee_title">{e.title}</span>
                  </div>
               </Link>
            </>
         ))}
      </div>
   );
};

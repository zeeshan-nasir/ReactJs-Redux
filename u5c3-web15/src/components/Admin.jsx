import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Admin = () => {
   const { isAuth } = useContext(AuthContext);

   const [form, setForm] = useState({
      employee_name: "",
      employee_id: "",
      title: "",
      salary: "",
      image: "",
      username: "",
      password: "",
      tasks: "",
      status: "",
      team: "",
   });

   const handleChange = (e) => {
      // console.log(e.target);
      const { name, value } = e.target;

      setForm({
         ...form,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      fetch("http://localhost:8080/employee", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(form),
      });
   };

   if (!isAuth) {
      return <Navigate to={"/login"} />;
   }

   return (
      <form onSubmit={handleSubmit} className="createEmployee">
         <input
            onChange={handleChange}
            type="text"
            placeholder="Employee Name"
            name="employee_name"
         />
         <input
            onChange={handleChange}
            type="text"
            placeholder="Employee id"
            name="employee_id"
         />
         <select onChange={handleChange} name="title">
            <option value="intern">Intern</option>
            <option value="Jr Software Developer">Jr Software Developer</option>
            <option value="Sr Software Developer">Sr Software Developer</option>
            <option value="Team Lead">Team Lead</option>
         </select>
         <input
            onChange={handleChange}
            type="number"
            placeholder="Salary"
            name="salary"
         />
         <input
            onChange={handleChange}
            type="text"
            placeholder="Image"
            name="image"
         />
         <input
            onChange={handleChange}
            type="text"
            placeholder="User Name"
            name="username"
         />
         <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
         />
         <input
            onChange={handleChange}
            type="text"
            placeholder="Enter tasks separated by commas"
            name="tasks"
         />
         <select onChange={handleChange} name="status" id="status">
            <option value="">Select Status</option>
            <option value="terminated">Terminated</option>
            <option value="working">Working</option>
         </select>
         <select onChange={handleChange} name="team" id="team">
            <option value="">Select team</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="qa">QA</option>
         </select>
         <input className="createUser" type="submit" value={"submit"} />
      </form>
   );
};

import { useContext, useState } from "react";
import { useNavigate } from "react-router";

import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
   //  use reqres to log user in.
   const { handleAuth } = useContext(AuthContext);
   const [form, setForm] = useState({
      username: "",
      password: "",
   });

   const navigate = useNavigate();

   const getData = async () => {
      let fetched = await fetch("https://reqres.in/api/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(form),
      });

      fetched = await fetched.json();
      if (!fetched.error) {
         handleAuth(true);
         navigate(-2);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      getData();
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({
         ...form,
         [name]: value,
      });
      console.log(form);
   };

   return (
      <form onSubmit={handleSubmit} className="loginform">
         <input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="Enter username"
            className="login_username"
         />
         <input
            onChange={handleChange}
            name="password"
            type="text"
            placeholder="Enter password"
            className="login_password"
         />
         <input type="submit" value="SIGN IN" className="login_submit" />
      </form>
   );
};

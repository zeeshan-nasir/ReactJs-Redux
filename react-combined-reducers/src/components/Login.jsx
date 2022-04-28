import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuth } from "../Redux/Auth/actions";
import { useNavigate } from "react-router";
const Login = () => {
   const userAuth = useSelector((store) => store.auth.auth);
   localStorage.setItem("auth", userAuth);

   const dispatch = useDispatch();

   const navigate = useNavigate();

   const [form, setForm] = useState({
      email: "",
      password: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;

      setForm({
         ...form,
         [name]: value,
      });
      console.log(form);
   };

   const fetchData = async () => {
      let fetched = await fetch("https://reqres.in/api/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(form),
      });

      fetched = await fetched.json();
      console.log(fetched);

      if (fetched.error === "Missing email or username") {
         alert("Missing email or username!");
      } else {
         localStorage.setItem("token", fetched.token);
         dispatch(toggleAuth({ auth: true }));
         navigate(-2);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      fetchData();
   };

   return (
      <div className="formDiv">
         <form onSubmit={handleSubmit} action="" className="form">
            <label htmlFor="">Email</label>
            <input name="email" onChange={handleChange} type="text" />
            <label htmlFor="">Password</label>
            <input name="password" onChange={handleChange} type="text" />
            <input className="formBtn" type="submit" name="" id="" />
         </form>
      </div>
   );
};

export default Login;

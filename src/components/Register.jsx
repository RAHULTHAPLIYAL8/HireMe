import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import axiosInstance from "../api/axios";

const Register = () => {

 
 
  const [state,setState]=useState({email:"",password:"",username:"",first_name:"",last_name:""});

  const Registerapi=(e)=>
  {
   e.preventDefault();
  axiosInstance.post("/register/", {
  email: state.email,
  password: state.password,
  username: state.username,
  first_name:state.first_name,
  last_name:state.last_name,
  userType:"normal"
}).then((data)=>{
  console.log(data)
}).catch((err)=>
{
  console.log(err)
})
  }

  const changeState=(e)=>{
    const {name,value}=e.target;
    setState((pre)=>(
      {
        ...pre,
        [name]:value
      }
    ))

  }

  return (
    <div className="w-5/6 h-5/6 p-8 bg-white shadow-lg rounded-xl flex justify-center items-center flex-col">
      <h2 className="text-3xl font-semibold text-gray-600 text-center mb-5">
        Register
      </h2>

      <form  className="space-y-5" onSubmit={Registerapi}>
        <div>
          <label
            htmlFor="username"
            className="text-md font-medium  text-gray-600"
          >
            Enter your username
          </label>
          <input id="username" name="username" onChange={changeState} value={state.username} type="text" placeholder="abcd" />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-md font-medium  text-gray-600"
          >
            Enter your email
          </label>
          <input id="email" name="email" onChange={changeState} value={state.email} type="email" placeholder="exampl123@gmail.com" />
        </div>

         <div>
          <label
            htmlFor="password"
            className="text-md font-medium  text-gray-600"
          >
            Enter your email
          </label>
          <input id="password" name="password" onChange={changeState} value={state.password} type="password" placeholder="exampl123" />
        </div>

        <Button  width={"100%"} />
       </form>
    </div>
  );
};

export default Register;

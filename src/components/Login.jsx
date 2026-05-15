import Input from "./Input"
import Button from "./Button";
import toast from "react-hot-toast";
import axiosInstance from "../api/axios";
import { useState } from "react";

const Login = () => {

  let [state, setState] = useState({ email: "", password: "" });

  let loginSet=(e)=>{
    e.preventDefault();
    axiosInstance.post("/userlogin/",{
      email:state.email,
      password:state.password
    }).then((data)=>
    {
      if(data.status===200)
        toast.success(data.data.message)
      else
        toast.error(data.data.message)
    }
    ).catch((err)=>
    {
       toast.error(err.response.data.message)
    })
  }

  let valueChange=(e)=>
  {
  let {name,value}=e.target;
  setState((prev)=>(
    {
        ...prev,
        [name]:value
      }))
  }

  return (
            <div className="w-5/6 h-5/6 p-8 bg-white shadow-lg rounded-xl flex justify-center items-center flex-col">

          <h2 className="text-3xl font-semibold text-gray-600 text-center mb-5">
            Login
          </h2>

          <form    onSubmit={loginSet} className="space-y-5">

            <div className="w-100">
              <label htmlFor="username" className="text-md block font-medium  text-gray-600 mb-2">
                Enter your email
              </label>
              <input id="username" className="w-full p-2" type="text" name="email" onChange={valueChange} value={state.email} placeholder="example123@gmail.com"/>
            </div>

            <div>
              <label htmlFor="password" className="text-md font-medium  text-gray-600 mb-2">
                Enter your password
              </label>
              <input id="password" className="w-full p-2" type="password" name="password" onChange={valueChange} value={state.password} placeholder="Enter password"/>
            </div>

           <Button   name={"Submit"} width={"100%"} />

          </form>

        </div>
  );
};

export default Login;

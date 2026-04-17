import Input from "./Input"
import Button from "./Button";
import axiosInstance from "../api/axios";
import { useState } from "react";

const Login = () => {

  let [state, setState] = useState({ email: "", password: "" });

  let loginSet=()=>{
    axiosInstance("/login",{
      email:state.email,
      password:state.password
    }).then((data)=>
    {
      console.log(data);
    }
    ).catch((err)=>
    {
      console.log(err)
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

          <form className="space-y-5">

            <div>
              <label htmlFor="username" className="text-md font-medium  text-gray-600">
                Enter your email
              </label>
              <Input id="username" type="text" name="email" onChange={valueChange} value={state.email} placeholder="example123@gmail.com"/>
            </div>

            <div>
              <label htmlFor="password" className="text-md font-medium  text-gray-600">
                Enter your password
              </label>
              <Input id="password" type="password" name="password" onChange={valueChange} value={state.password} placeholder="Enter password"/>
            </div>

           <Button  onSubmit={loginSet} name={"Submit"} width={"100%"} />

          </form>

        </div>
  );
};

export default Login;

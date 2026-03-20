// import { useNavigate } from "react-router";
import Login from "../components/Login";
import Register from "../components/Register";

const Auth = ({children}) => {

  // const navigate=useNavigate()

  return (
    <div className="min-h-screen w-full flex">
      
      {/* Left Side - Form */}
      <div className="w-full sm:w-1/2 flex justify-center items-center bg-gray-50">
          {children}
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 bg-primary justify-center items-center text-white hidden sm:flex ">
        <h1 className="text-4xl font-bold">
          Hire Me!
        </h1>
      </div>

    </div>
  );
};

export default Auth;
import Input from "./Input"
import Button from "./Button";

const Login = () => {
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
              <Input id="username" type="text" placeholder="example123@gmail.com"/>
            </div>

            <div>
              <label htmlFor="password" className="text-md font-medium  text-gray-600">
                Enter your password
              </label>
              <Input id="password" type="password" placeholder="Enter password"/>
            </div>

           <Button name={"Submit"} width={"100%"} />

          </form>

        </div>
  );
};

export default Login;

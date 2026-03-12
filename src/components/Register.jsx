import Input from "./Input";
import Button from "./Button";

const Register = () => {

  return (
    <div className="w-5/6 h-5/6 p-8 bg-white shadow-lg rounded-xl flex justify-center items-center flex-col">
      <h2 className="text-3xl font-semibold text-gray-600 text-center mb-5">
        Register
      </h2>

      <form className="space-y-5">
        <div>
          <label
            htmlFor="username"
            className="text-md font-medium  text-gray-600"
          >
            Enter your username
          </label>
          <Input id="username" type="text" placeholder="abcd" />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-md font-medium  text-gray-600"
          >
            Enter your email
          </label>
          <Input id="email" type="email" placeholder="exampl123@gmail.com" />
        </div>

         <div>
          <label
            htmlFor="password"
            className="text-md font-medium  text-gray-600"
          >
            Enter your email
          </label>
          <Input id="password" type="passwrod" placeholder="exampl123" />
        </div>

        <Button name={"Submit"} width={"100%"} />
      </form>
    </div>
  );
};

export default Register;

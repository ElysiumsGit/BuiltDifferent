import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import MyText from "../components/MyText/MyText";
import TextField from "../components/TextField/TextField";

const Login = () => {
  return (
    <div className="flex h-screen">
      <section className="flex-1 bg-white hidden lg:flex flex-col justify-center items-center p-8">
        <div className="text-center">
          <div className="mb-6">
            <img src="/assets/business-graphic.png" alt="Business graphic" className="w-80 h-auto" />
          </div>
          <p className="text-2xl font-bold">20K</p>
          <p className="text-gray-600">Businesses have already joined us!</p>
        </div>
      </section>

      <section className="flex-1 flex flex-col justify-center items-start px-6 bg-gray-100">
        <div className="max-w-md w-full mx-auto">
          <MyText variant="title" children={<p>Welcome to Built Different</p>} />
          <MyText variant="subtitle" children={<p>Your Admin Dashboard</p>} />
          <div className="mt-6 space-y-4">
            <TextField label="Email" type="email" placeholder="Enter your email" />
            <TextField label="Password" type="password" placeholder="Enter your password" />

            <div className="flex justify-between items-center text-sm mt-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember this Device</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>  

            <div className="flex flex-col gap-4">
              <Link to="/dashboard">
                <Button>Sign In</Button>
              </Link>
              <Button className="bg-gray-500 hover:bg-gray-600" icon="/assets/google-icon.svg" iconAlt="Google">Sign in with Google</Button>
            </div>

            

            <p className="text-sm mt-4">
              New to Built Different: <Link to="/signup" className="text-green-600 hover:underline">Sign up here</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

import Button from '../components/Button/Button';
import MyText from '../components/MyText/MyText';
import TextField from '../components/TextField/TextField';
import { Link } from 'react-router-dom';

const Signup = () => {
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

      <section className="flex-1 flex flex-col justify-center items-center px-6 bg-gray-100">
        <div className="max-w-md w-full">
          <MyText variant="title">
            <p>Welcome to Built Different</p>
          </MyText>
          <MyText variant="subtitle">
            <p>Your Admin Dashboard</p>
          </MyText>

          <form className="mt-6 flex flex-col">
            <div className="flex gap-4">
              <div className="flex-1">
                <TextField label="First Name" placeholder="First name" />
              </div>
              <div className="flex-1">
                <TextField label="Last Name" placeholder="Last name" />
              </div>
            </div>

            <TextField label="Email address" type="email" placeholder="name@example.com" />

            <div className="flex gap-4">
              <div className="flex-1">
                <TextField label="Password" type="password" placeholder="Password" />
              </div>
              <div className="flex-1">
                <TextField label="Confirm password" type="password" placeholder="Confirm Password" />
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="form-checkbox" />
              <span>
                I accept the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>
              </span>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <Button>Sign Up</Button>
              <Button className="bg-gray-500 hover:bg-gray-600" icon="/assets/google-icon.svg" iconAlt="Google">
                Sign up with Google
              </Button>
            </div>

            <p className="text-sm mt-4">
              Already have an account?{' '}
              <Link to="/" className="text-green-600 hover:underline">Sign in here</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;

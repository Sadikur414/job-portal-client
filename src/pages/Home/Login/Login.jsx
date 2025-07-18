import Lottie from "lottie-react";
import loginLottiedata from "../../../assets/lottie/login.json";
import AuthContext from "../../../Components/ContextProvider/AuthContext";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  console.log("Location:", location);
  const from = location?.state || "/";
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  // ********************Handle submit function*************************
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from);
        console.log(user);
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex lg:flex-row-reverse">
          {/* -------------------Lottie image---------------- */}
          <div className="text-center md:flex-1 md:max-w-sm lg:text-left">
            <Lottie animationData={loginLottiedata} loop={true} />
          </div>
          {/* --------------------------Form --------------*/}
          <div className="card md:flex-1 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <input
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value="Login"
                />
              </form>
              {/* -------------Social register------------- */}
              <div className="divider">OR</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

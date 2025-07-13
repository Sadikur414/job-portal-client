import Lottie from "lottie-react";
import registerLottidata from "../../assets/lottie/register.json";
import { useContext } from "react";
import AuthContext from "../ContextProvider/AuthContext";
const Register = () => {
  // ********************Handle submit function*************************
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex lg:flex-row-reverse">
          {/* -------------------Lottie image---------------- */}
          <div className="text-center md:flex-1 md:max-w-sm lg:text-left">
            <Lottie animationData={registerLottidata} loop={true} />
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
                <input
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value="Register"
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

export default Register;

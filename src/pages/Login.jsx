import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginRedux } from '../Firebase/firebase';

const Login = () => {
  const LoginError = useSelector((state) => state.user.error);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      const res = await loginRedux(emailRef.current.value,passwordRef.current.value,dispatch)
      console.log(LoginError)
      if(res){
         throw new Error("Your Credentials is not correct");
      }else{
        navigate("/home")
      }
      // navigate("/home")
    } catch {
      alert("Credentials are wrong");
      setError("Credentials are wrong");
    }
    setLoading(false);
  }
  return (
    <div className="flex flex-col py-6 sm:py-10 gap-3 sm:gap-5 w-[80%] sm:w-[70%] lg:w-[50%] xl:w-[40%] bg-slate-100 mx-auto items-center">
      <h1 className="text-center text-2xl sm:text-3xl font-bold">Login</h1>
      <form
        className="flex flex-col gap-3 md:gap-5 w-[80%] sm:w-2/3 p-2"
        onSubmit={handleSubmit}
      >
        {error ? <p>{error}</p> : null}
        <div className="flex flex-col gap-2 sm:gap-3 justify-between">
          <label
            htmlFor="email"
            className="text-base sm:text-xl font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="text-sm sm:text-xl bg-gray-200 h-6 sm:h-9 p-1 sm:p-2"
          />
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <label
            htmlFor="password"
            className="text-base sm:text-xl font-semibold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            className="text-sm sm:text-xl bg-gray-200 h-6 sm:h-9 p-2"
          />
        </div>
        {!loading ? (
          <button
            type="submit"
            className="bg-green-500 h-9 sm:h-10 text-lg sm:text-xl font-semibold mt-3 text-white rounded-lg"
          >
            LogIn
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-500 h-9 sm:h-10 text-lg sm:text-xl font-semibold mt-3 text-white rounded-lg"
            disabled
          >
            Loading..
          </button>
        )}
      </form>
      <div>
        <p className="text-base sm:text-lg">
          Need an Account?
          <Link to="/signUp" className="text-green-700 font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { db, signUpRedux } from "../Firebase/firebase";
import { addDoc } from "@firebase/firestore";
import { addUser } from "../Firebase/firestore";
import { bool, object } from "prop-types";

const SingUp = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const nameRef = useRef();
  const[error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // Handeling the submit button
  async function handleSubmit(e){
    e.preventDefault()
    // Check if the password and the cofirm password is same
    if (passwordConfirmRef.current.value!==passwordRef.current.value){
       alert("The password and The confirm Password do not match");
       return setError("The password and the confirmation password do not match")
    }
    // Make a sing Up Request to the firebase server
    try{
      setError('')
      setLoading(true)
      const res = await signUpRedux(
        emailRef.current.value,
        passwordRef.current.value,
        dispatch
      );
      console.log("User - ",res._delegate.uid)
      if(typeof res ==='boolean'){
        throw new Error("Your Credentials is not correct");
      }else{
        await addUser(
          res._delegate.uid,
          nameRef.current.value,
          emailRef.current.value
        );
        navigate("/home");
      }
    }catch{
      alert("There was some error while singin up")
      setError("Unable to create an account")
    }
    setLoading(false); 
  }
  return (
    <div className="flex flex-col py-10 gap-5 w-[40%] bg-slate-100 mx-auto items-center">
      <h1 className="text-center text-3xl font-bold">SingUp</h1>
      <form className="flex flex-col gap-5 w-2/3 p-2" onSubmit={handleSubmit}>
        {error ? <p>{error}</p> : null}
        <div className="flex flex-col gap-3 justify-between">
          <label
            htmlFor="name"
            className="text-xl font-semibold text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            className="bg-gray-200 h-9 p-2"
          />
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <label
            htmlFor="email"
            className="text-xl font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="bg-gray-200 h-9 p-2"
          />
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <label
            htmlFor="password"
            className="text-xl font-semibold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            className="bg-gray-200 h-9 p-2"
          />
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <label
            htmlFor="passwordConfirm"
            className="text-xl font-semibold text-gray-700"
          >
            Password Confirm
          </label>
          <input
            type="password"
            id="passwordConfirm"
            ref={passwordConfirmRef}
            className="bg-gray-200 h-9 p-2"
          />
        </div>
        {!loading ? (
          <button
            type="submit"
            className="bg-green-500 h-10 text-xl font-semibold mt-3 text-white rounded-lg"
          >
            Sign Up
          </button>
        ) : (
          <button
            type="submit"
            className="bg-gray-500 h-10 text-xl font-semibold mt-3 text-white rounded-lg"
            disabled
          >
            Loading..
          </button>
        )}
      </form>
      <div>
        <p>
          Already have an Account?{" "}
          <Link to="/login" className="text-green-700 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SingUp
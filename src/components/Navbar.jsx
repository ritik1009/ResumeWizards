import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutRedux } from "../Firebase/firebase";
import { useState } from "react";

const Navbar = () => {
  const data = useSelector((state) => state.user.currentUser);
  const [loading,setLoading] =useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("CurrentUser",data)
  async function logout(){
    setLoading(true)
    await logoutRedux(dispatch)
    setLoading(false)
    navigate("/login")
  }
  return (
    <div className="w-screen h-20 flex justify-between items-center pt-3 pl-12 pr-10 mb-10 text-green-600 mr-3 box-border">
      <NavLink to="home">
        <h1 className="font-[Graduate] text-3xl font-bold cursor-pointer">
          ResumeWizards
        </h1>
      </NavLink>
      <ul className="flex gap-2 text-lg font-medium ">
        <li className="px-3 py-2 flex item-center justify-center cursor-pointer">
          Templates
        </li>
        <li className="px-3 py-2 flex item-center justify-center cursor-pointer">
          Blogs
        </li>
        <li className="px-3 py-2 flex item-center justify-center cursor-pointer">
          Help
        </li>
        <NavLink to="home">
          <li className="px-3 py-2 flex item-center justify-center cursor-pointer">
            Home
          </li>
        </NavLink>
        {Object.keys(data).length === 0 ? (
          <div className="flex">
            <NavLink to="login">
              <li className=" rounded-xl px-4 py-2 flex item-center justify-center cursor-pointer">
                Login
              </li>
            </NavLink>
            <NavLink to="signUp">
              <li className="px-3 py-2 flex item-center justify-center cursor-pointer">
                Sign Up
              </li>
            </NavLink>
          </div>
        ) : (
          <li
            className="px-3 py-2 flex item-center justify-center cursor-pointer"
            onClick={logout}
          >
            {loading ? "Loading" : "LogOut"}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

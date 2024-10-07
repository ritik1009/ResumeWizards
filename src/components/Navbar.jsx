import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutRedux } from "../Firebase/firebase";
import { useState } from "react";
import Menu from "./elements/Menu";

const Navbar = () => {
  const data = useSelector((state) => state.user.currentUser);
  const [loading,setLoading] =useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function logout(){
    setLoading(true)
    await logoutRedux(dispatch)
    setLoading(false)
    navigate("/login")
  }
  return (
    <div className="w-screen h-20 flex justify-between items-center pt-3 pl-2 sm:pl-3 md:pl-5 pr-2 sm:pr-3 md:pr-5 mb-6 sm:mb-10 text-green-600 mr-3 box-border">
      <NavLink to="home">
        <h1 className="font-[Graduate] text-xl  md:text-2xl font-bold cursor-pointer">
          ResumeWizards
        </h1>
      </NavLink>
      <ul className="hidden  display-hide sm:flex gap-2 text-sm md:text-md lg:text-lg font-medium ">
        <li className="px-2 py-1 md:px-3 md:py-2 flex item-center justify-center cursor-pointer">
          Templates
        </li>
        <li className="px-2 py-1 md:px-3 md:py-2 flex item-center justify-center cursor-pointer">
          Blogs
        </li>
        <li className="px-2 py-1 md:px-3 md:py-2 flex item-center justify-center cursor-pointer">
          Help
        </li>
        <NavLink to="home">
          <li className="px-2 py-1 md:px-3 md:py-2 flex item-center justify-center cursor-pointer">
            Home
          </li>
        </NavLink>
        {Object.keys(data).length === 0 ? (
          <div className="flex">
            <NavLink to="login">
              <li className=" rounded-xl px-2 py-1 md:px-3 md:py-2 flex item-center justify-center cursor-pointer">
                Login
              </li>
            </NavLink>
            <NavLink to="signUp">
              <li className="px-2 py-1 md:px-3 md:py-2 flex item-center justify-center cursor-pointer">
                Sign Up
              </li>
            </NavLink>
          </div>
        ) : (
          <li
            className="px-2 py-1 md:px-3 md:py-2 flex item-center justify-center cursor-pointer"
            onClick={logout}
          >
            {loading ? "Loading" : "LogOut"}
          </li>
        )}
      </ul>
      <div className=" sm:hidden flex justify-end">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;

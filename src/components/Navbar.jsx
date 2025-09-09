import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = async()=>{
    try{
      await axios.post(BASE_URL+"/logout", {}, {withCredentials: true});
      dispatch(removeUser());
      return navigate("/login");
    }catch(err){
      console.log(err);
    } 
  }

  // console.log(user);

  return (
    <div className="navbar bg-neutral text-neutral-content shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"> 👨‍💻DevTinder</a>
      </div>

      {user && (
        <div className="flex gap-2">
          <p className="px-4 ">Welcome, {user.firstName}</p>
          <div className="dropdown dropdown-end mx-5 flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral text-neutral-content rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between hover:bg-neutral-focus">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a className="hover:bg-neutral-focus">Setting</a>
              </li>
              <li>
                <a onClick={handleLogout} className="hover:bg-neutral-focus">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

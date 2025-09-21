import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useEffect } from "react"
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=> store.user)
  const fetchUser = async()=>{
  try{  
    if(userData) return;
    const res = await axios.get(BASE_URL + "/profile",{withCredentials: true});
    dispatch(addUser(res.data));
  }catch(err){
    if(err.status === 401){
      navigate("/login");
    }
  }
  }

  useEffect(()=>{
    fetchUser();
  },[]);
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>

  )
}

export default Body
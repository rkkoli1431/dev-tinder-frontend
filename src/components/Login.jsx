import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {
  const [emailId, setEmailId] = useState("Sonal@gmail.com");
  const [password, setPassword] = useState("Sonal@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
   try{
    const res = await axios.post(BASE_URL+ "/login",{
      emailId,
      password, 
    }, {withCredentials: true});
    console.log(res);
    dispatch(addUser(res.data));
    return navigate("/");
  }catch(err){
    console.log(err); 
    alert("Incorrect email or password !!");  
  }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 ">
      <div className="card bg-black w-96 text-white shadow-2xl rounded-2xl">
        <div className="card-body p-8 space-y-5">
          <h2 className="text-2xl font-bold text-center" onClick={handleLogin}>Login</h2>
          <p className="text-gray-400 text-sm text-center">
            Welcome back! Please login to your account.
          </p>

          {/* Email Input */}
          <div className="space-y-1">
            <label className="block text-sm">Email </label>
            <input
              type="email"
              value={emailId}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-800 text-white placeholder-gray-500"
              onChange={(e)=> setEmailId(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label className="block text-sm">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              className="input input-bordered w-full bg-gray-800 text-white placeholder-gray-500"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between text-sm pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Remember me
            </label>
            <a href="#" className="text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button className="btn btn-primary w-full mt-4" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login

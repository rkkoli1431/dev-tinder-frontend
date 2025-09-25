import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true); // toggle state
  const [err, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong !!");
    }
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong !!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4">
      <div className="bg-gray-950 w-full max-w-md text-white shadow-2xl rounded-2xl p-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-2">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          {isLogin
            ? "Welcome back! Please login to your account."
            : "Create an account to get started."}
        </p>

        {/* Toggle */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-gray-800 rounded-xl overflow-hidden">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                isLogin ? "bg-blue-600" : "bg-transparent"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                !isLogin ? "bg-blue-600" : "bg-transparent"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  placeholder="Enter your first name"
                  className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  placeholder="Enter your last name"
                  className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm">Email</label>
            <input
              type="email"
              value={emailId}
              placeholder="Enter your email"
              className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between text-sm pt-2">
          {isLogin && (
            <a href="#" className="text-blue-400 hover:underline">
              Forgot password?
            </a>
          )}
          <p className="text-red-500 text-center">{err}</p>
        </div>

        {/* Button */}
        <button
          className="btn btn-primary w-full mt-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          onClick={isLogin ? handleLogin : handleSignup}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Login;

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true }
      );
      // alert("Registration Successful!");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Registration Failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="card bg-black w-96 text-white shadow-2xl rounded-2xl">
        <div className="card-body p-8 space-y-5">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <p className="text-gray-400 text-sm text-center">
            Create a new account and get started.
          </p>

          {/* Name Input */}
          <div className="space-y-1">
            <label className="block text-sm">First Name</label>
            <input
              type="text"
              value={firstName}
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-800 text-white placeholder-gray-500"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

            <div className="space-y-1">
            <label className="block text-sm">Last Name</label>
            <input
              type="text"
              value={lastName}
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-800 text-white placeholder-gray-500"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div className="space-y-1">
            <label className="block text-sm">Email</label>
            <input
              type="email"
              value={emailId}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-800 text-white placeholder-gray-500"
              onChange={(e) => setEmailId(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-1">
            <label className="block text-sm">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Re-enter your password"
              className="input input-bordered w-full bg-gray-800 text-white placeholder-gray-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <button
            className="btn btn-primary w-full mt-4"
            onClick={handleRegister}
          >
            Register
          </button>

          {/* Redirect to Login */}
          <p className="text-gray-400 text-sm text-center mt-3">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

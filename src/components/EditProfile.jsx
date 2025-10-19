import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const [showTost, setShowTost] = useState(false);
  const dispatch = useDispatch();

      const saveProfile = async () => {
      try{
         const res = await axios.put(BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,

         },
        {withCredentials: true}
      );
      dispatch(addUser(res?.data?.data));
      setShowTost(true);
      setTimeout (() =>{
        setShowTost(false);
      },3000);
      }catch(err){
        setError(err.message);
      }
    }

  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-6 bg-gray-800 min-h-screen text-white">
      
      {/* Form Card */}
      <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Edit Profile</h2>
        <p className="text-gray-400 text-center mb-6">Update your personal information</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">First Name</label>
            <input
              type="text"
              value={firstName}
              placeholder="Enter your first name"
              className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Last Name</label>
            <input
              type="text"
              value={lastName}
              placeholder="Enter your last name"
              className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Photo URL</label>
            <input
              type="url"
              value={photoUrl}
              placeholder="Enter your photo URL"
              className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Age</label>
            <input
              type="number"
              value={age}
              placeholder="Enter your age"
              className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

        <div>
            <label className="block text-sm font-medium text-gray-300">Gender</label>
            <select
              value={gender}
              className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
              onChange={(e) => setGender(e.target.value)}
               >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
        </div>


          <div>
            <label className="block text-sm font-medium text-gray-300">About</label>
            <textarea
              value={about}
              placeholder="Tell something about yourself"
              className="input input-bordered w-full bg-gray-700 text-white resize-none h-24 placeholder-gray-400"
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button className="btn bg-blue-600 text-white hover:bg-blue-700 w-full mt-2" onClick={saveProfile}>
            Update Profile
          </button>
        </div>
      </div>

      {/* Preview Card */}
      <div className="w-full max-w-xs">
        <h3 className="text-lg font-semibold text-white mb-4 text-center">Preview</h3>
        <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />
      </div>
    </div>
  { showTost && <div className="toast toast-top toast-center">
      <div className="alert alert-success">
        <span>Message sent successfully.</span>
      </div>
    </div>
    }
    </>
  );
};

export default EditProfile;

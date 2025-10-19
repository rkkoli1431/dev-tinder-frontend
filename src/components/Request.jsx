import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";

const Request = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );

      console.log(res);
      dispatch(removeRequest(_id));
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchRequest = async () => {
    const res = await axios.get(BASE_URL + "/user/requests/received", {
      withCredentials: true,
    });
    console.log(res);
    dispatch(addRequests(res.data.data));
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requests || requests.length === 0)
    return (
      <h1 className="font-bold text-center text-xl text-red-500 mt-10">
        Request Not Found
      </h1>
    );

  return (
    <div className="bg-gray-900 min-h-screen px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-8">
        Friend Requests
      </h1>

      <div className="space-y-4 max-w-3xl mx-auto">
        {requests.map((request) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;

          return (
            <div
              key={_id}
              className="flex items-center justify-between bg-gray-800 border border-gray-700 hover:border-gray-500 rounded-xl p-4 shadow-md transition-all"
            >
              {/* Left side - Image + Info */}
              <div className="flex items-center gap-4">
                <img
                  alt="profile"
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                  src={photoUrl}
                />
                <div>
                  <h2 className="font-bold text-lg text-white">
                    {firstName + " " + lastName}
                  </h2>
                  {age && gender && (
                    <p className="text-gray-300 text-sm">
                      {age} • {gender}
                    </p>
                  )}
                  <p className="text-gray-400 text-sm">{about}</p>
                </div>
              </div>

              {/* Right side - Buttons */}
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-all cursor-pointer"
                  onClick={() => reviewRequest("rejected", request._id)}
                >
                  Reject
                </button>
                <button
                  className="px-3 py-1 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-all cursor-pointer"
                  onClick={() => reviewRequest("accepeted", request._id)}
                >
                  Accept
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Request;

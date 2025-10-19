import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { useEffect } from "react";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  if (!connections || connections.length === 0)
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <h1 className="font-bold text-center text-xl text-red-400">
          Connection Not Found
        </h1>
      </div>
    );

  return (
    <div className="bg-gray-900 min-h-screen px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-8">
        Your Connections
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {connections.map((connection) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            connection;
          return (
            <div
              key={_id}
              className="flex flex-col items-center md:flex-row bg-gray-800 hover:bg-gray-700 transition-all rounded-2xl shadow-lg p-6"
            >
              <img
                alt="profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-600"
                src={photoUrl}
              />

              <div className="text-center md:text-left md:ml-6 mt-4 md:mt-0">
                <h2 className="font-bold text-xl text-white">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && (
                  <p className="text-gray-300 text-sm mt-1">
                    {age} • {gender}
                  </p>
                )}
                <p className="text-gray-400 mt-2">{about}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;

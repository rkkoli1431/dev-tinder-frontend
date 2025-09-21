import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import {addConnections} from "../utils/connectionSlice";
import { useEffect } from "react";

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connections);
    const fetchConnection = async ()=>{
      try{
        const res = await axios.get(BASE_URL+"/user/connections", {withCredentials: true});
        console.log(res);
        dispatch(addConnections(res.data.data));
      } catch(err){
        console.log(err.message);
     }

    };

    useEffect(()=>{
      fetchConnection();
    },[])

    if(!connections || connections === 0) return <h1 className="text-bold">Connectio Not Found </h1>
  return (
    <div className="text-center my-10">
      <div className="text-bold text-white text-3xl">Connections</div>
      {connections.map((connection) =>{
         const {_id, firstName, lastName, photoUrl, age, gender, about} = connection;
         return(
          <div key={_id} className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
          <div>
            <img
              alt="photo"
              className="w-20 h-20 rounded-full"
              src={photoUrl}
            />
          </div>
          <div className="text-left mx-4">
            <h2 className="font-bold text-xl">
              {firstName + " " + lastName}
            </h2>
            {age && gender && <p>{age + " " + gender}</p>}
            <p>{about}</p>
          </div>
          </div>
         )
      })}
    </div>
  )
}

export default Connections
import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../utils/requestSlice'
// import status from 'daisyui/components/status'

const Request = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requests);

    const reviewRequest = async(status, _id) =>{
        try{
            // const res = await axios.post(BASE_URL + "/request/review/", + status + "/" + _id, {}, {withCredentials: true});
             const res = await axios.post(
            `${BASE_URL}/request/review/${status}/${_id}`,
            {},
            { withCredentials: true }
            );

            console.log(res);
            dispatch(removeRequest(_id))
            console.log(_id);

        }catch(err){
            console.log(err.message);
        }
    }

    const fetchRequest = async() =>{
        const res = await axios.get(BASE_URL + "/user/requests/received", {withCredentials: true});
        console.log(res);
        dispatch(addRequests(res.data.data));
    };

    useEffect(()=>{
        fetchRequest();
    },[]);

    if(!requests || requests === 0) return <h1 className="text-bold">Request Not Found </h1>
  return (
    <div className="text-center my-10">
      <div className="text-bold text-white text-3xl">Request</div>
      {requests.map((request) =>{
         const {_id, firstName, lastName, photoUrl, age, gender, about} = request.fromUserId
;
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
          <div>
            <button className="btn btn-primary mx-2" onClick={()=> reviewRequest("rejected", request._id)}>Reject</button>
            <button className="btn btn-secondary mx-2" onClick={()=> reviewRequest("accepeted", request._id)}>Accept</button>
          </div>
          </div>
         );
      })}
    </div>
  );
};

export default Request
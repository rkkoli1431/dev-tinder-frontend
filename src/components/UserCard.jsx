const UserCard = ({ user }) => {

  const { firstName, lastName, photoUrl, age, gender, about } = user;
  

  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-xl overflow-hidden max-w-md mx-auto text-center p-6">
      
      {/* Circular Profile Image */}
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-500">
        <img
          src={photoUrl}
          alt="alt photo"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-xl font-semibold mt-4">{firstName} {lastName}</h2>
      
      {age && gender && (
        <p className="text-sm text-gray-400 mt-1">
          {age} yrs, {gender}
        </p>
      )}

      <p className="mt-2 text-gray-300 text-sm line-clamp-3">
        {about}
      </p>

      <div className="mt-4 flex justify-center space-x-4">
        <button className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition">
          Ignore
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
          Interested
        </button>
      </div>
    </div>
  );
};

export default UserCard;
  
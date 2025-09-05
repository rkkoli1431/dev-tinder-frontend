import { useSelector } from "react-redux";

const Feed = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Welcome to your Feed 🎉</h1>
        <p className="mt-4 text-lg">
          Hello, <span className="font-semibold">{user?.firstName}</span> 👋
        </p>

        {/* Example feed content */}
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-gray-800 rounded-xl shadow">
            <h2 className="font-semibold">Post 1</h2>
            <p className="text-gray-300">This is an example post in your feed.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-xl shadow">
            <h2 className="font-semibold">Post 2</h2>
            <p className="text-gray-300">More feed content will go here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;

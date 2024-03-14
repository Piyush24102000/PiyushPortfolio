import Sidebar from "../components/Sidebar";
import { videos } from "../utils/videos";


const Youtube = () => {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to My YouTube Channel
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Here you'll find a collection of videos covering various topics. Feel
          free to explore and enjoy!
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Map through videos and render a card for each video */}
          {videos.map((video) => (
            <div key={video.id} className="bg-white shadow-md p-4 rounded-lg">
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
              </a>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Youtube;

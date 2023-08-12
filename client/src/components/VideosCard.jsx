/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const VideosCard = ({ videos }) => {
  return (
    <div className="flex m-5">
      <div className="grid grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            className="bg-white shadow-md rounded-lg overflow-hidden"
            key={video._id}
          >
            <Link to={`/videos/${video._id}`}>
              <img
                src={video.thumbnailUrl}
                alt="image"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosCard;

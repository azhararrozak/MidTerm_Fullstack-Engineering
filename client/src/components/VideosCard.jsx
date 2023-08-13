/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import axios from "axios";


const VideosCard = ({ videos }) => {

  const deleteVideo = (id) => {
    axios.delete(`http://localhost:3000/api/videos/${id}`)
    .then(res => alert(res.data))
  }

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
            <div>
            <Link to={`/edited/${video._id}`}><button className="w-1/2 px-4 py-2 bg-green-500 text-white ">Edited</button></Link>
              <button className="w-1/2 px-4 py-2 bg-red-500 text-white" onClick={() => deleteVideo(video._id)}>Delete</button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosCard;

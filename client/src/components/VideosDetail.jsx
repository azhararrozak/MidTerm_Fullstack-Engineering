/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CommentForm from "./CommentForm";

const VideosDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/videos/${id}`)
      .then((res) => setVideos(res.data))
      .catch((error) => console.log(error));
  }, [videos]);

  console.log(videos)

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Link to="/" className="bg-blue-500 hover:text-blue-300 mb-4 px-4 text-white rounded">Back</Link>
      <iframe
        width="560"
        height="315"
        src={videos.videoUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h3 className="font-bold">{videos.title}</h3>
      <p>{videos.description}</p>
      <div>
        <CommentForm id={id} />
        <h4>Comments:</h4>
        <ul>
          {videos.comments &&
            videos.comments.map((comment) => (
              <li key={comment._id}>{comment.text}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default VideosDetail;

/* eslint-disable react/prop-types */

import { useState } from "react";
import axios from "axios";


const CommentForm = ({id}) => {
    const [comment, setComment] = useState({text: ''})

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = `http://localhost:3000/api/videos/${id}/comments`;
        
            const response = await axios.post(apiUrl, comment);
        
            console.log('API response:', response.data);

            setComment({
              text: ''
            });
          } catch (error) {
            console.error('Error submitting data:', error);
          }
    }

    const handleChange = (e) => {
    const { name, value } = e.target;
    setComment((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-[800px]">
      <div className="mb-4">
        <input
          type="text"
          id="text"
          name="text"
          value={comment.text}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  )
}

export default CommentForm
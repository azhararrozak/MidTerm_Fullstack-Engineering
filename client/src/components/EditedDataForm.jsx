/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const EditedDataForm = ({ initialData, onSubmit }) => {
  const [editedData, setEditedData] = useState({
    title: "",
    description: "",
    videoUrl: "",
    thumbnailUrl: "",
  });

  useEffect(() => {
    setEditedData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-[800px]">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={editedData.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={editedData.description}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="videoUrl" className="block font-semibold mb-1">
          Video URL <span className='italic font-normal'>(Copy ID Video from YT)</span>
        </label>
        <input
          type="text"
          id="videoUrl"
          name="videoUrl"
          value={editedData.videoUrl}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="thumbnailUrl" className="block font-semibold mb-1">
          Thumbnail URL <span className='font-normal'>(Get Thumbnail from <a target="_blank" rel="noopener noreferrer" className='italic text-blue-400' href="http://www.get-youtube-thumbnail.com/">Here</a>)</span>
        </label>
        <input
          type="text"
          id="thumbnailUrl"
          name="thumbnailUrl"
          value={editedData.thumbnailUrl}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Update
      </button>
    </form>
  );
};

export default EditedDataForm;

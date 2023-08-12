import DataForm from "../components/DataForm";
import Header from "../components/Header";
import axios from 'axios';
import { useState } from "react";

const AddPage = () => {
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (newData) => {
    try {
      console.log("New data submitted:", newData);

      // Mengganti 'localhost' dengan alamat IP Anda jika perlu
      const apiUrl = "http://localhost:3000/api/videos";

      const response = await axios.post(apiUrl, newData);

      console.log("API response:", response.data);

      // Set response message
      setResponseMessage("Data successfully submitted.");
    } catch (error) {
      console.error("Error submitting data:", error);

      // Set error message
      setResponseMessage("An error occurred while submitting data.");
    }
  };
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="font-bold text-xl uppercase">Adding Data</h1>
        <DataForm onSubmit={handleSubmit} />
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
};

export default AddPage;

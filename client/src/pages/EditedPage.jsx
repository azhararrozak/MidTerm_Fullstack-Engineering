/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import EditedDataForm from "../components/EditedDataForm";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const EditedPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/videos/${id}`)
      .then((response) => {
        setApiData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  // Fungsi untuk menangani submit form
  const handleFormSubmit = (updatedData) => {
    // Kirim data yang diperbarui ke API menggunakan axios.patch() atau metode yang sesuai
    axios
      .patch(`http://localhost:3000/api/videos/${id}`, updatedData)
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        // Lakukan tindakan lain setelah pembaruan berhasil
        navigate('/');
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        // Anda dapat menambahkan logika lainnya untuk menangani error
      });
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header />
          <div className="flex justify-center items-center h-screen flex-col">
            <h1 className="font-bold text-xl uppercase">Edited Data</h1>
            <EditedDataForm initialData={apiData} onSubmit={handleFormSubmit} />
          </div>
        </>
      )}
    </div>
  );
};

export default EditedPage;

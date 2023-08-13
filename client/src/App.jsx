
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import VideosDetail from "./components/VideosDetail";
import AddPage from "./pages/AddPage";
import EditedPage from "./pages/EditedPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} exact/>
        <Route path="/add" element={<AddPage />} />
        <Route path="/videos/:id" element={<VideosDetail />} />
        <Route path="/edited/:id" element={<EditedPage />} />
      </Routes>
    </div>
  );
}

export default App;

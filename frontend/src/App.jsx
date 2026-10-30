import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AppLayout from "./components/layout/AppLayout";
import PhotosPage from "./pages/PhotosPage";
import FavoritesPage from "./pages/FavoritesPage";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" />

      <Routes>
        <Route path="/login" element={<AuthPage />} />

        {/* Protected route  */}
        <Route element={<AppLayout />} />
        <Route path="/" element={<PhotosPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/albums" element={<PhotosPage />} />
      </Routes>
    </>
  );
};

export default App;

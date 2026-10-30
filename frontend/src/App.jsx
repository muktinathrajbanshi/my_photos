import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AppLayout from "./components/layout/AppLayout";
import PhotosPage from "./pages/PhotosPage";
import FavoritesPage from "./pages/FavoritesPage";
import AlbumDetailPage from "./pages/AlbumDetailPage";
import AlbumsPage from "./pages/AlbumsPage";
import TrashPage from "./pages/TrashPage";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" />

      <Routes>
        <Route path="/login" element={<AuthPage />} />

        {/* Protected route  */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<PhotosPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/albums" element={<AlbumsPage />} />
          <Route path="/albums/:id" element={<AlbumDetailPage />} />
          <Route path="/trash" element={<TrashPage />} />
        </Route>

        {/* Fallback  */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;

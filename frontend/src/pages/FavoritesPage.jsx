import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { DUMMY_MEDIA } from "../assets/assets";
import Loading from "../components/common/Loading";
import PhotoGrid from "../components/photos/PhotoGrid";

const FavoritesPage = () => {
  const { searchQuery } = useOutletContext();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState([]);
  const [activePhoto, setActivePhoto] = useState(null);

  const fetchFavorites = async () => {
    setTimeout(() => {
      setPhotos(DUMMY_MEDIA.slice(5, 9));
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchFavorites();
  }, [searchQuery]);

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleFavorite = async (id) => {
    console.log(id);
  };

  const handleTrash = async (id) => {
    console.log(id);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
        <div>
          <h2 className="text-2xl font-medium text-slate-900 tracking-tight flex items-center gap-2">
            Favorites{" "}
            {photos.length > 0 && (
              <span className="text-sm font-medium text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                {photos.length}
              </span>
            )}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Your started photos and videos for quick access
          </p>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : photos.length === 0 ? (
        <div className="empty-state-card">
          <h3 className="text-lg font-medium text-slate-800">
            No fovorites yet
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
            Click the star icon on any photo or video in your collection to add
            it to your favorites.
          </p>
        </div>
      ) : (
        <div>
          <PhotoGrid
            photos={photos}
            selectedIds={selectedIds}
            onToggleSelect={toggleSelect}
          />
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;

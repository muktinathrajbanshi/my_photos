import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { DUMMY_MEDIA } from "../assets/assets";

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
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;

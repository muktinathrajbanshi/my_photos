import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { DUMMY_MEDIA } from "../assets/assets";

const PhotosPage = () => {
  const { searchQuery, onOpenUpload, openCreateAlbum } = useOutletContext();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState([]);
  const [filterType, setFilterType] = useState("all");

  const fetchPhotos = async () => {
    setTimeout(() => {
      setPhotos(DUMMY_MEDIA);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchPhotos();
  }, [searchQuery, filterType]);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header info  */}
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between
      gap-4 pb-2 border-b border-slate-200/60"
      >
        {/* left  */}
        <div>
          <h2>
            Photos & Videos
            {photos.length > 0 && (
              <span
                className="text-sm font-semibold text-slate-400 bg-slate-100
            px-2.5 py-0.5 rounded-full"
              >
                {photos.length}
              </span>
            )}
          </h2>
        </div>

        {/* right  */}
      </div>

      {/* Media Content  */}
    </div>
  );
};

export default PhotosPage;

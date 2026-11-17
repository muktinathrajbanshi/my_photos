import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { DUMMY_MEDIA } from "../assets/assets";
import { Film, ImageIcon } from "lucide-react";
import Loading from "../components/common/Loading";

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
          <h2 className="text-2xl font-medium text-slate-900 tracking-tight flex items-center gap-2">
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
          <p className="text-xs text-slate-500 mt-0.5">
            All your preserved photos and videos, automatically organized by
            date
          </p>
        </div>

        {/* right  */}
        <div className="flex items-center gap-2.5">
          <div
            className="flex items-center bg-slate-100 p-1 rounded-full text-xs
            font-medium text-slate-600"
          >
            <button
              onClick={() => setFilterType("all")}
              className={`px-3 py-1 rounded-full transition cursor-pointer 
            ${
              filterType === "all"
                ? "bg-white text-slate-900 font-semibold"
                : "hover:text-slate-900"
            }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType("image")}
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition cursor-pointer 
            ${
              filterType === "image"
                ? "bg-white text-slate-900 font-semibold"
                : "hover:text-slate-900"
            }`}
            >
              <ImageIcon className="size-3" />
              <span>Photos</span>
            </button>

            <button
              onClick={() => setFilterType("video")}
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition cursor-pointer 
            ${
              filterType === "video"
                ? "bg-white text-slate-900 font-semibold"
                : "hover:text-slate-900"
            }`}
            >
              <Film className="size-3" />
              <span>Videos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Media Content  */}
      {loading ? (
        <Loading />
      ) : photos.length === 0 ? (
        <div className="empty-state-card">
          <h3>
            {searchQuery ? "No matching media" : "Your media library is empty"}
          </h3>
        </div>
      ) : (
        <div>media file</div>
      )}
    </div>
  );
};

export default PhotosPage;

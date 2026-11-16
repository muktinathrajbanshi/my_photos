import { useState } from "react";
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
    }, 1000);
  };

  return <div>PhotosPage</div>;
};

export default PhotosPage;

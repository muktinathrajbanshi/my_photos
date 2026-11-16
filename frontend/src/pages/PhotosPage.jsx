import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const PhotosPage = () => {
  const { searchQuery, onOpenUpload, openCreateAlbum } = useOutletContext();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState([]);

  return <div>PhotosPage</div>;
};

export default PhotosPage;

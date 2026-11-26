import { useState } from "react";
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
      setPhotos(DUMMY_MEDIA(5));
    });
  };

  return <div>FavoritesPage</div>;
};

export default FavoritesPage;

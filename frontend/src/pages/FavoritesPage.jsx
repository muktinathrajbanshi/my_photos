import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const FavoritesPage = () => {
  const { searchQuery } = useOutletContext();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  return <div>FavoritesPage</div>;
};

export default FavoritesPage;

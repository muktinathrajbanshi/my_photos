import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const AlbumsPage = () => {
  const { openCreateAlbum } = useOutletContext() || {};
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  return <div>AlbumsPage</div>;
};

export default AlbumsPage;

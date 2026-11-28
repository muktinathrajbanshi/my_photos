import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { DUMMY_ALBUMS_DATA } from "../assets/assets";

const AlbumsPage = () => {
  const { openCreateAlbum } = useOutletContext() || {};
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchAlbums = async () => {
    setTimeout(() => {
      setAlbums(DUMMY_ALBUMS_DATA);
    }, 500);
  };

  return <div>AlbumsPage</div>;
};

export default AlbumsPage;

import { useOutletContext } from "react-router-dom";

const PhotosPage = () => {
  const { searchQuery, onOpenUpload, openCreateAlbum } = useOutletContext();

  return <div>PhotosPage</div>;
};

export default PhotosPage;

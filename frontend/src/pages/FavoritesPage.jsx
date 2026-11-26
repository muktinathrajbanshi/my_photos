import { useOutletContext } from "react-router-dom";

const FavoritesPage = () => {
  const { searchQuery } = useOutletContext();

  return <div>FavoritesPage</div>;
};

export default FavoritesPage;

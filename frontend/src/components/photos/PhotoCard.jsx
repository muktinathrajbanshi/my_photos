import { useState } from "react";

const PhotoCard = ({
  photo,
  isSelected,
  onToggleSelect,
  onToggleFavorite,
  onClick,
  onRemoveFromAlbum,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return <div>PhotoCard</div>;
};

export default PhotoCard;

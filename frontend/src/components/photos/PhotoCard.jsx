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
  const isVideo =
    photo.mediaType === "video" ||
    photo.format === "mp4" ||
    photo.format === "mov";

  return <div>PhotoCard</div>;
};

export default PhotoCard;

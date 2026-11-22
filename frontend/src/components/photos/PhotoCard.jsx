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
    photo.format === "mov" ||
    photo.format === "webm" ||
    photo.url?.endsWith(".mp4");

  return <div className="">PhotoCard</div>;
};

export default PhotoCard;

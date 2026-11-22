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

  return (
    <div className="group photo-card-container photo-card-hover">
      {/* Aspect Ratio Container  */}
      <div className="aspect-4/3 w-full relative overflow-hidden bg-slate-100"></div>
    </div>
  );
};

export default PhotoCard;

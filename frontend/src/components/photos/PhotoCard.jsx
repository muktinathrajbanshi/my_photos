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
      <div className="aspect-4/3 w-full relative overflow-hidden bg-slate-100">
        {!imgLoaded && (
          <div
            className="absolute inset-0 bg-slate-200/80
        animate-pulse flex items-center justify-center text-xs text-slate-400"
          >
            Loading...
          </div>
        )}
        <img
          src={photo.thumbnailUrl || photo.url}
          alt={photo.title}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`photo-card-img ${imgLoaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  );
};

export default PhotoCard;

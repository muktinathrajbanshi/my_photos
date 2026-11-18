import { useMemo } from "react";

const PhotoGrid = ({
  photos,
  selectedIds,
  onToggleSelect,
  onToggleFavorite,
  onSelectPhoto,
  onRemoveFromAlbum,
}) => {
  const grouped = useMemo(() => {
    const groups = {};
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    photos.forEach((photo) => {
      const dateObj = new Date(photo.createdAt);
      const dateStr = dateObj.toDateString();
    });
  }, [photos]);

  return <div className="space-y-8 pb-16">{}</div>;
};

export default PhotoGrid;

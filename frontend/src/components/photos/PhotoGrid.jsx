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
      let label = dateObj.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      if (dateStr === today) {
        label = "Today";
      } else if (dateStr === yesterday) {
        label = "Yesterday";
      }

      if (!groups[label]) groups[label] = [];
      groups[label].push(photo);
    });

    return groups;
  }, [photos]);

  return (
    <div className="space-y-8 pb-16">
      {Object.entries(grouped).map(([dateLabel, groupPhotos]) => {
        const isGroupAllSelected =
          groupPhotos.label > 0 &&
          groupPhotos.every((p) => selectedIds.includes(p._id));

        return (
          <div className="space-y-3" key={dateLabel}>
            {/* Date Header  */}

            {/* Media Grid  */}
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGrid;

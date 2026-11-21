import { useMemo } from "react";

import { CheckCircle2Icon } from "lucide-react";

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

  const selectGroup = (groupPhotos) => {
    const allSelected = groupPhotos.every((p) => selectedIds.includes(p._id));
    groupPhotos.forEach((p) => {
      if (allSelected && selectedIds.includes(p._id)) {
        onToggleSelect(p._id);
      } else if (!allSelected && !selectedIds.includes(p._id)) {
        onToggleSelect(p._id);
      }
    });
  };

  return (
    <div className="space-y-8 pb-16">
      {Object.entries(grouped).map(([dateLabel, groupPhotos]) => {
        const isGroupAllSelected =
          groupPhotos.length > 0 &&
          groupPhotos.every((p) => selectedIds.includes(p._id));

        return (
          <div className="space-y-3" key={dateLabel}>
            {/* Date Header  */}
            <div className="flex items-center gap-2 backdrop-blur-xs py-2 z-20">
              <button
                onClick={() => selectGroup(groupPhotos)}
                className={`group/btn flex items-center gap-2 text-sm font-medium tracking-tight transition cursor-pointer 
                ${isGroupAllSelected ? "text-red-600" : "text-slate-800 hover:text-red-600"}`}
                title="Select all in this day"
              >
                <span className="size-5 rounded-full border border-slate-300 group-hover/btn:border-red-500 flex items-center justify-center text-xs">
                  <CheckCircle2Icon
                    className={`size-4 transition ${isGroupAllSelected ? "text-red-600 fill-red-100" : "text-transparent group-hover/btn:text-slate-300"}`}
                  />
                </span>
                <span>{dateLabel}</span>
              </button>
              <span>({groupPhotos.length})</span>
            </div>

            {/* Media Grid  */}
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGrid;

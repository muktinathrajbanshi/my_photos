import { CheckSquareIcon, StarIcon, XIcon } from "lucide-react";

const BulkSelectionBar = ({
  count,
  onClear,
  onFavorite,
  onAddToAlbum,
  onTrash,
}) => {
  if (count === 0) return null;

  return (
    <div className="bulk-bar-container">
      <div className="flex items-center gap-2 border-r border-slate-200 pr-3">
        <button
          onClick={onClear}
          className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition cursor-pointer"
          title="Clear selection"
        >
          <XIcon className="size-3.5" />
        </button>
        <span>
          <CheckSquareIcon className="size-3.5" />
          {count} selected
        </span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <button className="bulk-bar-btn">
          <StarIcon className="size-3.5 text-slate-500" />
          <span className="hidden sm:inline">Favorite</span>
        </button>
      </div>
    </div>
  );
};

export default BulkSelectionBar;

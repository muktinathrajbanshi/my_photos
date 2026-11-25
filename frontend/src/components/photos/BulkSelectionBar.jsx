import { XIcon } from "lucide-react";

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
        <span>{count} selected</span>
      </div>
    </div>
  );
};

export default BulkSelectionBar;

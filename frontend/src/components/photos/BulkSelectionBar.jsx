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
        <button></button>
        <span></span>
      </div>
    </div>
  );
};

export default BulkSelectionBar;

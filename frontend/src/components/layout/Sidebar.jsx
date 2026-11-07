import { FolderHeartIcon, PlusIcon, XIcon } from "lucide-react";

const Sidebar = ({
  onCreateAlbumClick,
  onUploadClick,
  isMobileOpen = false,
  onCloseMobile,
}) => {
  const navLinks = [{ to: "/", label: "Photos & Videos" }];

  const handleUploadClick = () => {
    onCloseMobile?.();
    onUploadClick?.();
  };

  const handleCreateAlbumClick = () => {
    onCloseMobile?.();
    onCreateAlbumClick?.();
  };

  return (
    <>
      {/* Mobile Backdrop  */}
      {isMobileOpen && (
        <div className="sidebar-backdrop" onClick={onCloseMobile} />
      )}

      <aside
        className={`sidebar-container ${isMobileOpen ? "sidebar-mobile-open" : "sidebar-mobile-closed"}`}
      >
        {/* header  */}
        <div className="sidebar-mobile-header">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="logo" className="size-7" />
            <span className="font-heading font-semibold text-slate-800 tracking-tight text-base">
              MY PHOTOS
            </span>
          </div>
          <button className="sidebar-close-btn" onClick={onCloseMobile}>
            <XIcon className="size-5" />
          </button>
        </div>

        {/* Main Navigation  */}
        <div className="space-y-6">
          <div className="space-y-2">
            <button onClick={handleUploadClick} className="sidebar-action-btn">
              <PlusIcon className="size-4" />
              <span>Upload Photos</span>
            </button>
            <button
              onClick={handleCreateAlbumClick}
              className="sidebar-action-btn"
            >
              <FolderHeartIcon className="size-4" />
              <span>Create Album</span>
            </button>
          </div>
          <nav></nav>
        </div>

        {/* Storage Widget  */}
      </aside>
    </>
  );
};

export default Sidebar;

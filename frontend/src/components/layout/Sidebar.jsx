const Sidebar = ({
  onCreateAlbumClick,
  onUploadClick,
  isMobileOpen = false,
  onCloseMobile,
}) => {
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
        </div>

        {/* Main Navigation  */}

        {/* Storage Widget  */}
      </aside>
    </>
  );
};

export default Sidebar;

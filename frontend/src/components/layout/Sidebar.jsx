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
          <div>
            <img src="/logo.png" alt="logo" className="size-7" />
          </div>
        </div>

        {/* Main Navigation  */}

        {/* Storage Widget  */}
      </aside>
    </>
  );
};

export default Sidebar;

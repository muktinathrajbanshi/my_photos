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

        {/* Main Navigation  */}

        {/* Storage Widget  */}
      </aside>
    </>
  );
};

export default Sidebar;

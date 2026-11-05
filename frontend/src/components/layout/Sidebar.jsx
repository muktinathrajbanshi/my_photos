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

      <aside>
        {/* header  */}

        {/* Main Navigation  */}

        {/* Storage Widget  */}
      </aside>
    </>
  );
};

export default Sidebar;

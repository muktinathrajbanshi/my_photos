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
    </>
  );
};

export default Sidebar;

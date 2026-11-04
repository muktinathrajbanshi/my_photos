import { MenuIcon, SearchIcon, SparkleIcon, XIcon } from "lucide-react";

const Navbar = ({
  searchQuery,
  onSearchChange,
  onUploadClick,
  onToggleSidebar,
}) => {
  return (
    <header className="navbar-header">
      {/* Left brand and mobile hamburger  */}
      <div className="navbar-brand">
        <button
          className="navbar-menu-btn"
          title="Toggle menu"
          aria-label="Toggle navigation menu"
        >
          <MenuIcon className="size-5" />
        </button>
        <img src="/logo.png" alt="logo" className="size-8" />
        <h1 className="navbar-brand-text">MY PHOTOS</h1>
      </div>

      {/* Center Search Bar  */}
      <div className="flex-1 max-w-2xl relative">
        <div className="navbar-search-wrapper">
          <SearchIcon className="size-4 text-slate-500 shrink-0 mr-2 sm:mr-3" />
          <input
            type="text"
            placeholder="Search photos, videos..."
            className="navbar-search-input"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery ? (
            <button
              onClick={() => onSearchChange("")}
              className="hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600 transition p-0.5"
            >
              <XIcon className="size-3.5 sm:size-4 text-slate-800" />
            </button>
          ) : (
            <div>
              AI-Powered Search{" "}
              <SparkleIcon className="size-3.5 animate-spin text-slate-600 shrink-0" />
            </div>
          )}
        </div>
      </div>

      {/* Right Action Icons: Upload & Profile  */}
      <div></div>
    </header>
  );
};

export default Navbar;

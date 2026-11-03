import { MenuIcon } from "lucide-react";

const Navbar = () => {
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
    </header>
  );
};

export default Navbar;

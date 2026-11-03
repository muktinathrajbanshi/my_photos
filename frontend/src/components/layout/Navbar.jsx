import { MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="navbar-header">
      {/* Left brand and mobile hamburger  */}
      <div className="navbar-brand">
        <button>
          <MenuIcon className="size-5" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

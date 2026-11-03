import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

const AppLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div>
      <Navbar searchQuery={searchQuery} />
      <p>sidebar</p>

      <main className="app-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

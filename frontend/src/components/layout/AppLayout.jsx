import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { Sidebar } from "lucide-react";

const AppLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [createAlbumState, setCreateAlbumState] = useState({
    isOpen: false,
    photoIds: [],
  });

  const navigate = useNavigate();
  const location = useLocation();

  const openCreateAlbum = (photoIds = []) => {
    setCreateAlbumState({});
  };

  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onUploadClick={() => setIsUploadOpen(true)}
        onToggleSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
      />

      <div className="flex-1 flex overflow-hidden min-h-0 relative">
        <Sidebar />

        <main className="app-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

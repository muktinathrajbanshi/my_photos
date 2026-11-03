import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <p>sidebar</p>

      <main className="app-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

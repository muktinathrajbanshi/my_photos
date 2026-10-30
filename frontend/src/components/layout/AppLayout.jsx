import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <p>navbar</p>
      <p>sidebar</p>

      <main className="app-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

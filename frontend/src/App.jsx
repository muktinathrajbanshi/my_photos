import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AppLayout from "./components/layout/AppLayout";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" />

      <Routes>
        <Route path="/login" element={<AuthPage />} />

        {/* Protected route  */}
        <Route element={<AppLayout />}>
        <Route path="/" element={"PhotosPage"} />
      </Routes>
    </>
  );
};

export default App;

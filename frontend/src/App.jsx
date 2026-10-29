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
        <Route element={<AppLayout />}></Route>
        {/* Protected route  */}
      </Routes>
    </>
  );
};

export default App;

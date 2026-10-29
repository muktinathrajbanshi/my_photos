import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" />
      <Routes>
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default App;

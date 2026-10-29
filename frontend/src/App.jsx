import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" />
      <Routes>
        <Route />
      </Routes>
    </>
  );
};

export default App;

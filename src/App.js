import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import WomenDetails from "./pages/WomenDetails";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Shopping from "./pages/Shopping";
import MenDetails from "./pages/MenDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        rtl={true}
      />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/Women/:id" element={<WomenDetails />} />
        <Route path="/Men/:id" element={<MenDetails />} />
      </Routes>
    </div>
  );
}

export default App;

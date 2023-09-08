import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import WomenDetails from "./pages/WomenDetails";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Shopping from "./pages/Shopping";
import MenDetails from "./pages/MenDetails"
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route path="/shopping" element={<Shopping />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/Women/:id" element={<WomenDetails />} />
        <Route path="/Men/:id" element={<MenDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;

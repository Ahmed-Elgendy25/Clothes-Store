import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

import Shopping from "./pages/Shopping";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </div>
  );
}

export default App;

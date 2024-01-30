import Dashboard from "../src/pages/authorization/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../src/pages/authentication/LandingPage"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

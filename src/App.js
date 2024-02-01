import Dashboard from "../src/pages/authorization/Dashboard"
import Request from "../src/pages/authorization/Request"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../src/pages/authentication/LandingPage"
import "../src/styles/tailwind.css"
import RequestForm from "./pages/form/RequestForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/request" element={<Request />} />
          <Route path="/request/form" element={<RequestForm />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

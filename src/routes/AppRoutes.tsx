import { Routes, Route } from "react-router-dom";

import AuthPage from "../auth/signin/AuthPage";
import Home from "../pages/home/Home";
import Portfolio from "../pages/portfolio/Portfolio";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />

      {/* Sign in page */}
      <Route path="/signin" element={<AuthPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

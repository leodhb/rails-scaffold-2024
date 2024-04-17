import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { MainLayout } from "./layouts/MainLayout";

export default (
  <Router>
    <Routes>
      <Route path="/" element={(
        <MainLayout>
          <Home />
        </MainLayout>
      )} />
    </Routes>
  </Router>
);
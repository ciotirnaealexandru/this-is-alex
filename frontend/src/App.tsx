import { Routes, Route, Navigate, useLocation } from "react-router";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route
        path="/"
        element={
          location.pathname === "/" ? <Navigate to="/about" replace /> : null
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;

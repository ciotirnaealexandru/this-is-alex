import { Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import About from "./pages/About/About";

function App() {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    }
  }, []);

  return (
    <Routes>
      {firstLoad && (
        <Route path="/" element={<Navigate to="/about" replace />} />
      )}
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

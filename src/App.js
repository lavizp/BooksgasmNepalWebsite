import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage/HomePage";
import SingleBookPage from "./Pages/SingleBookPage/SingleBookPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:title" element={<SingleBookPage />} />
      </Routes>
    </>
  );
}

export default App;

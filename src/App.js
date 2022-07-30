import NavBar from "./Components/Navbar/NavBar";
import BannerMain from "./Components/Banners/BannerMain";

import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="" element />
      </Routes>
    </>
  );
}

export default App;

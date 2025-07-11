import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SoundPracticePage from "../pages/SoundPracticePage";
//import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SoundPracticePage" element={<SoundPracticePage />} />
      {/*
      <Route path="*" element={<NotFound />} />
       */}
    </Routes>
  );
}

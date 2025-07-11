import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
//import LPage from '../pages/LPage'
//import RPage from '../pages/RPage'
//import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/*
          <Route path="/LPage" element={<LPage />} />
      <Route path="/RPage" element={<RPage />} />
      <Route path="*" element={<NotFound />} />
        */}
    </Routes>
  )
}

import { Route, Routes } from "react-router-dom"
import ComingSoon from "./pages/ComingSoon"
import Home from "./pages/Home"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<ComingSoon title="Destination" />} />
      <Route path="/crew" element={<ComingSoon title="Crew" />} />
      <Route path="/technology" element={<ComingSoon title="Technology" />} />
    </Routes>
  )
}

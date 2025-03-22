import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Services from './pages/Services';


export default function App() {
  return (
      <>

          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/Services" element={<Services />} />
          </Routes>

      </>
  )
}
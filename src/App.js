import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import Guide from './pages/Guide/Guide';
import Download from './pages/Download/Download';
import FAQ from './pages/FAQ/FAQ';
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/SDOP-website" element={<Home />} />
            <Route path="/Guide" element={<Guide />} />
            <Route path="/Download" element={<Download />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

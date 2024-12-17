import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Trangchu from './Pages/Trangchu/Trangchu';
import Vechungtoi from './Pages/Vechungtoi/Vechungtoi';
import Bosuutap from './Pages/Bosuutap/Bosuutap';
import Nhan from './Pages/Nhan/Nhan'
import Vongco from './Pages/Vongco/Vongco'
import Vongtay from './Pages/Vongtay/Vongtay'
import Khuyentai from './Pages/Khuyentai/Khuyentai'
import Sp1 from './Pages/Pro-one/sp1'
import Sp2 from './Pages/Pro-two/Sp2'
import Sp3 from './Pages/Pro-three/Sp3'
import Sp4 from './Pages/Pro-four/Sp4'
import Sp5 from './Pages/Pro-five/Sp5'
import Sp6 from './Pages/Pro-six/Sp6'
import Sp7 from './Pages/Pro-seven/Sp7'
import Sp8 from './Pages/Pro-eight/Sp8'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Trangchu />} />
        <Route path="/about-us" element={<Vechungtoi />} />
        <Route path="/collections" element={<Bosuutap />} />
        <Route path="/category/nhan" element={<Nhan />} />
        <Route path="/category/vongco" element={<Vongco />} />
        <Route path="/category/vongtay" element={<Vongtay />} />
        <Route path="/category/khuyentai" element={<Khuyentai />} />
        <Route path="/product/1" element={<Sp1 />} />
        <Route path="/product/2" element={<Sp2 />} />
        <Route path="/product/3" element={<Sp3 />} />
        <Route path="/product/4" element={<Sp4 />} />
        <Route path="/product/5" element={<Sp5 />} />
        <Route path="/product/6" element={<Sp6 />} />
        <Route path="/product/7" element={<Sp7 />} />
        <Route path="/product/8" element={<Sp8 />} />
     
            
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

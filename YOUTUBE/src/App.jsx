import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Pageheader from './Component/Pageheader/Pageheader.jsx';
import Video from './Pages/Video/Video';
import Footer from './Component/Footer/Footer.jsx';



function App() {

  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <div className='m-0 p-0 box-border font-sans max-h-screen flex flex-col'>
        <Navbar setSidebar={setSidebar} />

        <div className="sticky top-0 bg-white z-10 p-4">
          <Pageheader />
        </div>

        <Routes>
          <Route path='/' element={<Home sidebar={sidebar} />} />
          <Route path='/video/:categoryId/:videoId' element={<Video />} />
        </Routes>
      </div>

      <Footer className />
    </>
  )
}

export default App

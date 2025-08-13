import React, { useState } from 'react';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './Component/Navbar/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Pageheader from './Component/Pageheader/Pageheader.jsx';
import Video from './Pages/Video/Video';
import Footer from './Component/Footer/Footer.jsx';
import Shorts from './Pages/Shorts/Shorts.jsx';
import Search from './Component/Search/Search.jsx';



function App() {

  const [sidebar, setSidebar] = useState(true);

  

  return (
    <>
      <div className='m-0 p-0 box-border font-sans max-h-screen flex flex-col'>
        <Navbar setSidebar={setSidebar} />

        
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path='/' element={<Home sidebar={sidebar} />} />
          <Route path='/video/:categoryId/:videoId' element={<Video />} />
          <Route path='/shorts' element={<Shorts />}/>
          
        </Routes>
      </div>

      <Footer className />
    </>
  )
}

export default App

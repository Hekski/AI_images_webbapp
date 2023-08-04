import React, { useEffect, useRef } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { logo } from "./assets";

import { Home, CreatePost, Info } from "./pages";

const App = () => {
   const link1 = useRef(null);
   const link2 = useRef(null);
   const link3 = useRef(null);

   function handleSlider(ref) {
      const slider = document.getElementById("slider");
      slider.style.width = `${ref.current.offsetWidth}px`;
      slider.style.height = `${ref.current.offsetHeight + 24}px`;
      slider.style.transform = `translateX(${ref.current.offsetLeft}px)`;
   }

   useEffect(() => {
      handleSlider(link1);
   }, []);

   return (
      <BrowserRouter>
         <header className="w-full flex items-center justify-center bg-background sm:px-8 py-4">
            <Link to="/">
               <img src={logo} alt="logo" className="w-32 ml-4 object-contain mr-8" />
            </Link>
            <div className="relative">
               <div className="absolute z-0 bg-accent-light rounded-full transition-all duration-300" id="slider"></div>
               <Link
                  to="/"
                  className="font-base bg-transparent rounded-xl"
                  ref={link1}
                  onClick={() => handleSlider(link1)}
               >
                  <button className="relative text-text-light z-10 px-4 py-2 text-xl font-semibold">Gallery</button>
               </Link>
               <Link
                  to="/create"
                  className="font-base bg-transparent rounded-xl"
                  ref={link3}
                  onClick={() => handleSlider(link3)}
               >
                  <button className="relative text-text-light z-10 px-4 py-2 text-xl font-semibold">Create</button>
               </Link>
               <Link
                  to="/info"
                  className="font-base bg-transparent rounded-xl"
                  ref={link2}
                  onClick={() => handleSlider(link2)}
               >
                  <button className="relative text-text-light z-10 px-4 py-2 text-xl font-semibold">Info</button>
               </Link>
            </div>
         </header>

         <main className="mobile:p-8 px-4 py-8 w-full bg-background min-h-[calc(100vh-73px)]">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/create" element={<CreatePost />} />
               <Route path="/info" element={<Info />} />
            </Routes>
         </main>
      </BrowserRouter>
   );
};

export default App;

// import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home.jsx";
import Blogs from "./components/pages/Blogs.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
// import NotFound from "./components/pages/NotFoundPage.jsx";
import NotExist from "./components/pages/NotFound.jsx";
import Products from "./components/pages/products.jsx";
import ManCollection from "./components/pages/MensCollections.jsx";
import WomanCollection from "./components/pages/WomenCollection.jsx";

function App() {
  const [isDark, isDarkTheme] = useState(true);

  const toggleTheme = () => {
    isDarkTheme(!isDark);
    console.log("Dark = ", !isDark); //! is used because clg will print out before the actual usDark value change as statevalue change is asynchronouse in nature
  };
  return (
    <div className="flex flex-col justify-between items-center min-w-full min-h-screen bg-zinc-800">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs/:number" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<NotExist />} />
        <Route path="/products" element={<Products />}>
          <Route
            path="menscollection"
            element={
              <ManCollection>
                <h1 className="text-5xl text-blue-500">This is main  latest, and branded collection.</h1>
                <h1 className="text-5xl text-pink-500">This is main  latest, and branded collection.</h1>
                <h1 className="text-5xl text-orange-500">This is main  latest, and branded collection.</h1>
              </ManCollection>
            }
          ></Route>
          <Route path="womenscollection" element={<WomanCollection />}></Route>
        </Route>
      </Routes>
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;

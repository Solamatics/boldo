import { useState } from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Company from "./components/Company";
import Connect from "./components/Connect";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Services />
      <Company />
      <Connect />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

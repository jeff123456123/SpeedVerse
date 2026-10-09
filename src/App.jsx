import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Join from "./components/Join";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return undefined;

    const frameId = window.requestAnimationFrame(() => {
      document
        .getElementById(location.hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.hash]);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Features />
              <Story />
              <Contact />
            </>
          }
        />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

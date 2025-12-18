import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import MainLayout from "./layouts/MainLayout";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Blogs from "./pages/Blogs";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={
          <>
            <Hero />

            <MainLayout>
              <section id="about"><Home /></section>
              <section id="projects"><Projects /></section>
              <section id="experience"><Experience /></section>
              <section id="tech"><Technologies /></section>
              <section id="contact"><Contact /></section>
            </MainLayout>
          </>
        }
      />

      {/* ROUTED PAGES */}
      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
            <Contact />
          </MainLayout>
        }
      />

      <Route
        path="/projects"
        element={
          <MainLayout>
            <Projects />
          </MainLayout>
        }
      />

      <Route
        path="/experience"
        element={
          <MainLayout>
            <Experience />
          </MainLayout>
        }
      />

      <Route
        path="/blogs"
        element={
          <MainLayout>
            <Blogs />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;

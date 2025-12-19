import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Experience from "./pages/Experience";
import Blogs from "./pages/Blogs";
import MyProfilePage from "./pages/MyProfile";
import Contact from "./components/Contact";
import TechnologyPage from "./pages/Technology";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <Routes>

      {/* ================= HOME ================= */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <MainLayout>
              <section id="about">
                <Home />
              </section>
            </MainLayout>
          </>
        }
      />

      {/* ================= STANDALONE PAGES ================= */}

      <Route
        path="/profile"
        element={
          <MainLayout>
            <MyProfilePage />
          </MainLayout>
        }
      />

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
        path="/blogs"
        element={
          <MainLayout>
            <Blogs />
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

      {/* ================= PROJECT ROUTES ================= */}

      <Route
        path="/projects"
        element={
          <MainLayout>
            <Projects />
          </MainLayout>
        }
      />

      <Route
        path="/projects/:slug"
        element={
          <MainLayout>
            <ProjectDetail />
          </MainLayout>
        }
      />
      {/* TECH */}
      <Route
        path="/tech"
        element={
          <MainLayout>
            <TechnologyPage />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <ContactPage />
          </MainLayout>
        }
      />

    </Routes>
  );
}

export default App;

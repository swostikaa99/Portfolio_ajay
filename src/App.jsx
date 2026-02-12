import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About/AboutPage";
import ResearchPage from "./pages/Research/ResearchPage";
import ExperiencePage from "./pages/Experience/ExperiencePage";
import AwardsPage from "./pages/Awards/AwardsPage";
import SkillsPage from "./pages/Skills/SkillsPage";
import ContactPage from "./pages/Contact/ContactPage";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

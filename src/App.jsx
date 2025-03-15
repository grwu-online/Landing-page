import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SiteHeader } from "./components/site-header.jsx";
import { HeroSection } from "./components/hero-section.jsx";
import { MissionSection } from "./components/mission-section.jsx";
import { BrandsSection } from "./components/brand-section.jsx";
import { ServicesSection } from "./components/services-section.jsx";
import WhyUsSection from "./components/why-us-section.jsx";
import { ScrollProgressBar } from "./components/scroll-progress-bar.jsx";
import { TeamSection } from "./components/team-section.jsx";
import { Footer } from "./components/site-footer.jsx";
import SubmitDetails from "./components/submit-details.jsx"; // Import SubmitDetails Page
import AdminPage from "./adminpage.jsx"; // Import AdminPage Page
import { ThankYou } from "./components/ThankYou";
import AdminLogin from "./components/AdminLogin.jsx";
function App() {
  return (    <Router>
      <div className="flex min-h-screen flex-col w-full">
        <ScrollProgressBar />
        <SiteHeader />
        <main className="">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <MissionSection />
                  <BrandsSection />
                  <ServicesSection />
                  <WhyUsSection />
                  <TeamSection />
                  <Footer />
                </>
              }
            />
            <Route path="/submit-details" element={<SubmitDetails />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
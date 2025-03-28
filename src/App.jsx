import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Etalks from "./components/Etalks";
import StartupShowcase from "./components/StartupShowcase";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Scanner from "./components/Scanner";
import Competitions from "./components/Competitions"; // Import the new component
import { auth, provider } from "./firebaseConfig";

function App() {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden" role="main">
        <Navbar auth={auth} provider={provider} />
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
                <Footer />
              </>
            } 
          />
          <Route path="/etalks" element={<Etalks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/competitions" element={<Competitions />} /> {/* Add new route */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
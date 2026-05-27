import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      <main className="max-w-6xl mx-auto px-4 py-10">
        {activePage === "home" && <Home />}
        {activePage === "services" && <Services />}
        {activePage === "contact" && <Contact />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
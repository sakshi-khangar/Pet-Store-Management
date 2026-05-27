import { useEffect, useState } from "react";

function Navbar({ activePage, onNavigate }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.body.classList.toggle("dark", next);
      return next;
    });
  };

  const linkBase =
    "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900";

  const navItems = [
    { label: "Home", page: "home" },
    { label: "Pets", page: "home" },
    { label: "Services", page: "services" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <nav
      className={`${darkMode ? "bg-gray-900" : "bg-white"} sticky top-0 z-50 border-b ${darkMode ? "border-gray-800" : "border-gray-100"} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button
            type="button"
            className="font-extrabold text-xl text-primary tracking-tight"
            onClick={() => onNavigate("home")}
          >
            Happy Paws
          </button>

          <button
            aria-label="Open menu"
            className="md:hidden flex flex-col gap-1 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <span className={`w-6 h-0.5 rounded ${darkMode ? "bg-gray-200" : "bg-gray-800"}`}></span>
            <span className={`w-6 h-0.5 rounded ${darkMode ? "bg-gray-200" : "bg-gray-800"}`}></span>
            <span className={`w-6 h-0.5 rounded ${darkMode ? "bg-gray-200" : "bg-gray-800"}`}></span>
          </button>

          <div
            className={`${mobileMenuOpen ? "block" : "hidden"} md:flex md:items-center md:gap-8 absolute md:relative top-16 md:top-0 left-0 right-0 ${darkMode ? "bg-gray-900" : "bg-white"} md:bg-transparent p-4 md:p-0 border-t md:border-t-0 border-gray-100 dark:border-gray-800 shadow-lg md:shadow-none transition-all duration-300`}
          >
            <ul className="flex flex-col md:flex-row gap-6 md:items-center">
              {navItems.map((item) => {
                const isActive = activePage === item.page;
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => onNavigate(item.page)}
                      className={`${linkBase} ${isActive ? "text-primary" : darkMode ? "text-gray-200" : "text-gray-700"}`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <button
              className={`${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-900 hover:bg-gray-800"} text-white px-4 py-2 rounded-xl transition mt-4 md:mt-0 shadow-sm hover:shadow-md`}
              onClick={toggleDarkMode}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

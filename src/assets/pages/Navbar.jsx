import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FiSun, FiMoon, FiHome, FiMail, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h1 className="logo">My Website</h1>

      {/* Hamburger */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <form className="search-form">
        <input
          type="search"
          placeholder="Search..."
          className="search-input"
        />
      </form>

      <div className={`nav-right ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/" onClick={closeMenu}>
              <FiHome /> Home
            </a>
          </li>
          <li>
            <a href="/contact" onClick={closeMenu}>
              <FiMail /> Contact
            </a>
          </li>
        </ul>

        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}

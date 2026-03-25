import { useState, useEffect } from "react";
import "../css/Navbar.css";
import "../css/Responsive.css";

const navItems = [
  { label: "Home", emoji: "🏠", href: "#home" },
  { label: "About", emoji: "🖼️", href: "#about" },
  { label: "Skills", emoji: "⚡", href: "#skills" },
  { label: "Projects", emoji: "📊", href: "#projects" },
  { label: "Contact", emoji: "🌐", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="navbar">
      <nav
        className={`nav-items ${scrolled ? "scrolled" : ""} ${menuOpen ? "open" : ""}`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            <span className="nav-emoji">{item.emoji}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;

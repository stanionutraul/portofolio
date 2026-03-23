import { useState, useEffect } from "react";
import "../css/Navbar.css";

const navItems = [
  { label: "Home", emoji: "🏠", href: "#home" },
  { label: "About", emoji: "🖼️", href: "#about" },
  { label: "Skills", emoji: "⚡", href: "#skills" },
  { label: "Projects", emoji: "📊", href: "#projects" },
  { label: "Contact", emoji: "🌐", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="navbar">
      <nav className={`nav-items ${scrolled ? "scrolled" : ""}`}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-link">
            <span className="nav-emoji">{item.emoji}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;

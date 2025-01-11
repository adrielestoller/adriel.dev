"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import navbar from "styles/navbar.module.css";
import { FontContext } from "providers/fontProvider";

export default function Navbar() {
  const fonts = useContext(FontContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About me" },
    { href: "/projects", label: "Projects" },
    { href: "/more", label: "More" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${navbar.container} ${fonts.inconsolata}`}>
      <div className={navbar.brand}>
        <Link href="/" className={`${navbar.brandLink} ${fonts.robotoMono}`}>
          Adriel.dev
        </Link>
      </div>

      <button
        className={navbar.menuButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`${navbar.menuOverlay} ${
          isMenuOpen ? navbar.overlayVisible : ""
        }`}
      >
        <div
          className={`${navbar.linksContainer} ${
            isMenuOpen ? navbar.menuOpen : ""
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={navbar.link}
              href={item.href}
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";
import logo from "./assets/logo.png";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Solution", href: "#solution" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-primary text-text sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-0">
        {/* Logo and Nav */}
        <div className="flex items-center gap-4 w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src={logo}
              alt="~"
              className="h-6 object-cover relative -top-0.5"
            />
          </div>
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium ml-8 flex-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-gray-400 transition-colors duration-150"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Actions */}
        <div className="flex items-center gap-2 min-w-[250px] justify-end">
          <button className="px-4 py-1 rounded-md border border-gray-700 bg-transparent text-text hover:bg-gray-800 transition-colors duration-150 text-sm max-md:hidden">
            Login
          </button>
          <button className="px-4 py-1 rounded-md bg-gray-100 text-black font-semibold hover:bg-transparent hover:text-white transition-colors duration-150 text-sm max-md:hidden">
            Sign Up
          </button>
          <button
            className="ml-2 p-2 rounded-md border border-gray-700 bg-transparent hover:bg-gray-800 transition-colors duration-150 md:inline-flex hidden"
            aria-label="Toggle theme"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-sun-icon lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </button>
          {/* Mobile menu button */}
          <button
            className="md:hidden ml-2 p-2 rounded-md border border-gray-700 bg-transparent hover:bg-gray-800 transition-colors duration-150"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-gray-800 px-4 pb-4 absolute top-16 left-0 w-full">
          <ul className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 px-2 rounded hover:bg-gray-800 transition-colors duration-150"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex gap-2 mt-2">
              <button className="flex-1 px-4 py-2 rounded-md border border-gray-700 bg-transparent text-text hover:bg-gray-800 transition-colors duration-150 text-sm">
                Login
              </button>
              <button className="flex-1 px-4 py-2 rounded-md bg-gray-100 text-black font-semibold hover:bg-transparent hover:text-white transition-colors duration-150 text-sm">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

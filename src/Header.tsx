import logo from "./assets/logo.png";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Solution", href: "#solution" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export default function Header() {
  return (
    <header className="w-full bg-primary text-text sticky top-0 z-50  px-4 sm:px-6 lg:px-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex gap-14 items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="~" className="h-6 object-cover" />
          </div>
          {/* Nav Links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
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
        <div className="flex items-center gap-2">
          <button className="px-4 py-1 rounded-md border border-gray-700 bg-transparent text-text hover:bg-gray-800 transition-colors duration-150">
            Login
          </button>
          <button className="px-4 py-1 rounded-md bg-gray-100 text-black font-semibold hover:bg-gray-200 transition-colors duration-150">
            Sign Up
          </button>
          <button
            className="ml-2 p-2 rounded-md border border-gray-700 bg-transparent hover:bg-gray-800 transition-colors duration-150"
            aria-label="Toggle theme"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-text"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M6.34 6.34l-.71-.71"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

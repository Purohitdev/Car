// components/Nav.tsx
import React from "react";

const Nav: React.FC = () => {
  const navLinks = [
    "home",
    "about",
    "services",
    "goals",
    "faq",
    "testimonials",
    "contact",
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and brand */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Brand Logo"
              className="h-32 w-auto object-contain"
            />
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm font-medium capitalize text-gray-700 hover:text-red-600 transition-colors"
              >
                {section}
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
       
        </div>
      </div>
    </header>
  );
};

export default Nav;

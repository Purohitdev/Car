// components/Nav.tsx
import React from "react";
import { Car } from "lucide-react";

const Nav: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2">
            <Car className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold">Mechanique</span>
          </a>
          <nav className="hidden md:flex gap-6">
            {[
              "home",
              "about",
              "services",
              "goals",
              "faq",
              "testimonials",
              "contact",
            ].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm font-medium hover:text-red-600 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;

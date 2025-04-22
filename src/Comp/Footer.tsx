import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {/* Logo & Description */}
          <div>
            <a href="/" className="flex items-start -mt-16">
              <img src="/logo.png" alt="Mechanique Logo" className="h-42 w-auto" />
            </a>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Your trusted partner for car rentals. Quality vehicles and exceptional service since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {["home", "about", "services", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-white transition duration-200"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact Us</h3>
            <address className="space-y-3 text-sm not-italic text-gray-400">
              <div>
                Email:{" "}
                <a
                  href="mailto:info@carrental.com"
                  className="hover:text-white transition duration-200"
                >
                  info@carrental.com
                </a>
              </div>
              <div>Phone: +123 456 7890</div>
              <div>123 Car Street, City, Country</div>
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://wa.me/+918432312345"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <FaWhatsapp className="text-white" />
              </a>

              <a
                href="https://www.instagram.com/mechanique.in?igsh=MXNtajk0ZmJpd3A1NA%3D%3D"
                aria-label="Instagram"
                className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; {currentYear} Mechanique. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

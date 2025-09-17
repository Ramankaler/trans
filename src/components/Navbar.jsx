// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="shadow-md sticky top-0 bg-white z-50">
      <nav className="flex items-center justify-between px-8 py-4">
        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600">
          TranspoX
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

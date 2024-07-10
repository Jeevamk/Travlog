
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src="./icon.svg" alt="Logo" />
            <span className="logo-name">Travlog</span>
          </Link>

          <div className="block lg:hidden">
            <button
              id="mobile-menu-toggle"
              className="text-purple-700"
              onClick={toggleMobileMenu}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.38 0H11.62C4.34 0 0 4.34 0 11.62V28.36C0 35.66 4.34 40 11.62 40H28.36C35.64 40 39.98 35.66 39.98 28.38V11.62C40 4.34 35.66 0 28.38 0ZM30 30.5H10C9.18 30.5 8.5 29.82 8.5 29C8.5 28.18 9.18 27.5 10 27.5H30C30.82 27.5 31.5 28.18 31.5 29C31.5 29.82 30.82 30.5 30 30.5ZM30 21.5H10C9.18 21.5 8.5 20.82 8.5 20C8.5 19.18 9.18 18.5 10 18.5H30C30.82 18.5 31.5 19.18 31.5 20C31.5 20.82 30.82 21.5 30 21.5ZM30 12.5H10C9.18 12.5 8.5 11.82 8.5 11C8.5 10.18 9.18 9.5 10 9.5H30C30.82 9.5 31.5 10.18 31.5 11C31.5 11.82 30.82 12.5 30 12.5Z"
                  fill="#5D50C6"
                />
              </svg>
            </button>
          </div>

          <div
            className={`lg:flex w-full lg:w-auto lg:order-1 ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
            
          >
            <ul className="nav-links-container">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive ? "nav-link-active" : "nav-link-inactive"
                    } nav-link-hover`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/discover"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive ? "nav-link-active" : "nav-link-inactive"
                    } nav-link-hover`
                  }
                >
                  Discover
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/deal"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive ? "nav-link-active" : "nav-link-inactive"
                    } nav-link-hover`
                  }
                >
                  Special Deals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive ? "nav-link-active" : "nav-link-inactive"
                    } nav-link-hover`
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <Link to="#" className="login">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="#" className="signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

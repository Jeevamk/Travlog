import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";



export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="./icon.svg"
              
              alt="Logo"
            />
            <span className="logo-name">Travlog</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="login"
            >
              Log In
            </Link>
            <Link
              to="#"
              className="signup"
            >
              Sign Up
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
            id="mobile-menu-2"
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
              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

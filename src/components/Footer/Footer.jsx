import React from "react";
import "../../styles/footer.css";
import { FaFacebook } from 'react-icons/fa'; 
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";



import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y my-8">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="./icon.svg" alt="Logo" />
              <span className="logo-name">Travlog</span>
            </Link>
            <p className="mt-2 text-gray-400 font-medium">
              Contrary to popular belief, Lorem Ipsum is not simply <br></br>{" "}
              random text. It has roots in a piece of classical Latin<br></br>{" "}
              literature from 45 BC.
            </p>
            <div className="flex mt-2">
              <a href="#" className="mr-4">
                <FaFacebook size={24} color="#5D50C6" />
              </a>
              <a href="#" className="mr-4">
                <AiFillTwitterCircle size={26} color="#5D50C6" />
              </a>
              <a href="#" className="mr-4 rounded-full bg-indigo-600 text-white">
                <TiSocialInstagram size={22} color="#fffff" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="footer-head">Company</h2>
              <ul className="footer-list">
                <li className="mb-4">
                  <Link to="/">About</Link>
                </li>
                <li className="mb-4">
                  <Link to="/">Career</Link>
                </li>
                <li>Mobile</li>
              </ul>
            </div>
            <div>
              <h2 className="footer-head">Contact</h2>
              <ul className="footer-list">
                <li className="mb-4">Why Travlog?</li>
                <li className="mb-4">Partner with us</li>
                <li className="mb-4">FAQ’ss</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h2 className="footer-head">Meet Us</h2>
              <ul className="footer-list">
                <li className="mb-4">+00 92 1234 56789</li>
                <li className="mb-4">info@travlog.com</li>
                <li className="mb-4">205. R Street, New York</li>
                <li>BD23200</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

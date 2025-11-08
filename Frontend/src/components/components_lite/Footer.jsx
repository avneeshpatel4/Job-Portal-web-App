import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center gap-2">
        {/* Copyright */}
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-600">Sunfire Sensei</span>. All rights reserved.
        </p>

        {/* Powered by */}
        <p className="text-sm sm:text-base">
          Powered by{" "}
          <a
            href="https://github.com/avneeshpatel4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6A38C2] font-medium hover:underline"
          >
            Avneesh Patel
          </a>
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm sm:text-base">
          <Link
            to="/PrivacyPolicy"
            className="text-gray-600 hover:text-[#6A38C2] transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            to="/TermsofService"
            className="text-gray-600 hover:text-[#6A38C2] transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Company Logo */}
          <div className="mb-8">
            <Link to="/" aria-label="Go to home page">
              <img
                src="/logo-new.png"
                alt="Lantern Investigations"
                className="mx-auto max-w-md w-full h-auto"
              />
            </Link>
          </div>

          {/* Company Name */}
          <div className="mb-12">
            <h3 className="text-lg font-normal text-black">
              Lantern Investigations
            </h3>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 mb-12">
            {/* Phone and Email */}
            <div className="text-black text-[12px]">
              <span>Phone: 07979 359508</span><br />
              <span className="mx-2">Email:</span>
              <a href="mailto:info@lanterninvestigations.com" className="text-black hover:text-blue-600">
                info@lanterninvestigations.com
              </a>
            </div>

            {/* Address */}
            <div className="text-black text-[12px]">
              51 Lime Street, London EC3M 7DQ
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-2 space-y-2">
            <p className="text-black text-[12px]">
              © Copyright {new Date().getFullYear()} | All Rights Reserved
            </p>
            <p className="text-black text-[12px]">
              <Link to="/privacy-policy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link to="/terms-and-conditions" className="hover:text-blue-600">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <Link to="/" className="flex items-center" aria-label="Go to home page">
          <img
            src="/logo-new.png"
            alt="Lantern Investigations"
            className="h-14 md:h-16 w-auto"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;

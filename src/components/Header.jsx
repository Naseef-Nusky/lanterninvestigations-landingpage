import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <div className="flex items-center">
          <img
            src="/logo-new.png"
            alt="Lantern Investigations"
            className="h-14 md:h-16 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

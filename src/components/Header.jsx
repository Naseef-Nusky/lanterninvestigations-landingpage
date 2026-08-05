import React from 'react';
const Header = () => {

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
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

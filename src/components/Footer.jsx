import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Company Logo */}
          <div className="mb-8">
            <img
              src="/logo-new.png"
              alt="Lantern Investigations"
              className="mx-auto max-w-md w-full h-auto"
            />
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

          {/* Company registration & Copyright */}
          <div className="pt-2 space-y-2">
            <div className="text-black/70 text-[11px] leading-tight space-y-1">
              <p className="md:whitespace-nowrap">
                Lantern Investigations is the trading name of West Green Consultancy Limited. Registered in England and Wales
              </p>
              <p>Company Number 16300477.</p>
            </div>
            <p className="text-black text-[12px]">
              © Copyright {new Date().getFullYear()} | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

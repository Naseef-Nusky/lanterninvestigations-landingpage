import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-8 md:pt-10 pb-4 md:pb-5">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm md:text-base text-gray-600 hover:text-[#0047b2] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services. By using our website, you agree to these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="pt-4 md:pt-6 pb-12 px-6 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-justify">
          {/* Section 1 */}
          <h2 className="text-lg font-semibold text-black mb-2">1. Liability</h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            We try to ensure the accuracy of all of the content. However, we do not
            accept any liability for the use made by you of the content. The
            content of this site should only be used for information purposes and
            you should not rely on it to make (or refrain from making) any decision
            or take (or refrain from taking) any action.
            <br />
            <br />
            The site is for your personal use and is not to be used for any
            commercial purpose. As a result, Lantern Investigations will
            not be responsible in any circumstances for your loss of profits.
            Lantern Investigations will also not be responsible for any
            loss including wasted expenditure, corruption or destruction of data
            unless the loss results from something Lantern Investigations
            has done wrong.
            <br />
            <br />
            Lantern Investigations is not liable for any damages or
            losses resulting from your inability to use this site. Lantern
            Investigations cannot promise that the site will be uninterrupted or
            entirely error free. Because of the nature of the internet, the site is
            provided on an &quot;as available&quot; basis. Lantern Investigations
            will not be responsible to you if we are unable to provide the site for
            any reason beyond our control.
          </p>

          {/* Section 2 */}
          <h2 className="text-lg font-semibold text-black mb-2">
            2. Data Protection and Privacy
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            Any details which you provide to us from which we can identify you are
            held and processed in accordance with our{' '}
            <Link
              to="/privacy-policy"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>

          {/* Section 3 */}
          <h2 className="text-lg font-semibold text-black mb-2">
            3. Changes to the Terms
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            Lantern Investigations may change the site or these terms at
            any time. If you use the site after Lantern Investigations has
            changed the terms, you will be bound by the new terms.
          </p>

          {/* Section 4 */}
          <h2 className="text-lg font-semibold text-black mb-2">
            4. Governing Law and Jurisdiction
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            These terms and your use of this site are governed by and construed in
            accordance with the laws of England and Wales, and any disputes will be
            decided only by the Courts of England and Wales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

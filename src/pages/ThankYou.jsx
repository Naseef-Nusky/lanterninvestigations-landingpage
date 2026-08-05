import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  // Fire Google Ads conversion tracking when thank-you page loads
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      // Page view tracking
      window.gtag('event', 'page_view', {
        page_path: '/thank-you',
        page_title: 'Thank You - Lantern Investigations',
      });
      
      // Google Ads conversion tracking
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17631830520/QYHwCKi4uqkbEPjDwddB',
        'value': 100.0,
        'currency': 'GBP'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Inquiry
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We have received your details and will get back to you shortly. 
            Our team at Lantern Investigations will review your case 
            and contact you within 24 hours.
          </p>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              What happens next?
            </h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                We'll review your case details confidentially
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Our expert investigators will assess your requirements
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                You'll receive a detailed quote within 24 hours
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                We'll schedule a discreet consultation if needed
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Return to Homepage
            </Link>
            
            <Link
              to="/services/personal"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">
              <strong>100% Confidential & Discreet</strong>
            </p>
            <p className="text-xs text-gray-400">
              Licensed Private Investigators • UK Based • Professional Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

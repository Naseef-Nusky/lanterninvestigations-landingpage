import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const Item = ({ q, a, index, isOpen, onToggle }) => {
  return (
    <div className={`rounded-lg border transition-all duration-300 ${
      isOpen 
        ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-blue-400' 
        : 'bg-white text-gray-800 hover:bg-gray-50 border-gray-200'
    }`}>
      <button
        onClick={() => onToggle(index)}
        className="w-full text-left px-6 py-4 flex items-center justify-between group"
      >
        <div className="flex items-center space-x-3 flex-1">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
            isOpen 
              ? 'bg-white/20 text-white' 
              : 'bg-blue-100 text-blue-600'
          }`}>
            {index + 1}
          </div>
          <span className={`font-semibold ${isOpen ? 'text-white' : 'text-gray-800'}`}>
            {q}
          </span>
        </div>
        <div className={`transition-all duration-300 ${
          isOpen 
            ? 'text-white' 
            : 'text-blue-600'
        }`}>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-4">
          <div className={`pl-9 text-sm leading-relaxed ${
            isOpen ? 'text-white/90' : 'text-gray-700'
          }`}>
            {a}
          </div>
        </div>
      </div>
    </div>
  );
};

const AccordionFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const items = [
    {
      q: 'How Much Does a Private Investigator Cost?',
      a: "If you're asking, 'How much does a private investigator cost?' the answer depends on the type of investigation required. At Lantern Investigations, we provide affordable private investigator services tailored to your needs. Whether you need a detective private eye, legal investigator, or corporate private investigator, our pricing is transparent, competitive, and designed to deliver results."
    },
    {
      q: 'What Types of Investigations Do You Handle?',
      a: "We specialize in a wide range of investigative services including surveillance, background checks, matrimonial investigations, corporate investigations, fraud detection, missing persons cases, and legal support. Our experienced team uses cutting-edge technology and proven methodologies to deliver accurate results."
    },
    {
      q: 'How Long Does a Typical Investigation Take?',
      a: "The duration of an investigation varies greatly depending on the complexity and scope of the case. Simple background checks may take 2-5 business days, while complex surveillance or fraud investigations can take several weeks. We provide realistic timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      q: 'Is Everything Confidential and Discreet?',
      a: "Absolutely. Confidentiality is the cornerstone of our business. All investigations are conducted with the utmost discretion, and we maintain strict confidentiality agreements. Your privacy and the integrity of the investigation are our top priorities. We never compromise on discretion."
    },
    {
      q: 'What Information Do You Need to Start an Investigation?',
      a: "The information required depends on the type of investigation. Generally, we need basic details about the subject, your objectives, and any relevant background information. During our free consultation, we'll discuss exactly what information would be helpful and what we can work with to achieve the best results."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
        
                <h2 className="text-4xl  font-bold text-[#0047b2] mb-8">
                  Frequently Asked Questions
            </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our private investigation services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {items.map((item, idx) => (
            <Item 
              key={idx} 
              q={item.q} 
              a={item.a} 
              index={idx} 
              isOpen={openIndex === idx}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help with any specific questions about your case
          </p>
          <a href="#contact">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform">
              Contact Us Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccordionFAQ;
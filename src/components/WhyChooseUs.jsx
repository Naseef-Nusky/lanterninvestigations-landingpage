// import React from 'react';

// const WhyChooseUs = () => {
//   return (
//     <section className="py-16 md:py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <div className="text-center text-gray-700 space-y-6 text-lg leading-8">
//               <h2 className="text-4xl text-[#00b9ed] text-center mb-10">
//           Why Choose Us?
//         </h2>
//             <p className='text-[19px] font-medium'>
//               At Lantern Investigations, we specialize in discreet and
//               results‑oriented private investigation services, backed by a team of
//               highly experienced private detectives with over 25 years of expertise.
//               Whether you’re searching for a private investigator near me, need
//               phone investigation services, or require a financial investigator UK,
//               we provide answers with complete confidentiality.
//             </p>
//             <p className='text-[19px] font-medium'>
//               Our private investigation agency offers a range of services, including
//               corporate private investigations, legal investigations, electronic
//               harassment investigations, and personal private investigation services.
//               We tailor each case to your unique needs, ensuring accurate results
//               with professionalism, precision, and care.
//             </p>
//           </div>
//           <div className="w-full h-full lg:pt-20">
//             <img
//               src="/Why%20Choose%20Us.jpg"
//               alt="Digital investigation"
//               className="w-full h-full object-cover shadow"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


import React from 'react';
import { ShieldCheck, Users, Search, Briefcase } from "lucide-react"; // icons

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl  font-bold text-[#0047b2] mb-8 text-center lg:text-left">
              Why Choose Us?
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              With over <span className="font-semibold">25 years of experience</span>, 
              Lantern Investigations delivers discreet and results-oriented 
              private investigation services you can trust.
            </p>

            {/* Key Points */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
                <ShieldCheck className="text-[#00b9ed] w-7 h-7 mt-1" />
                <p className="text-gray-700 text-lg">
                  <span className="font-semibold">Confidential & Trusted:</span> 
                  All cases handled with complete discretion and professionalism.
                </p>
              </div>
              <div className="flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
                <Users className="text-[#00b9ed] w-7 h-7 mt-1" />
                <p className="text-gray-700 text-lg">
                  <span className="font-semibold">Expert Team:</span> 
                  Highly experienced detectives specializing in corporate and personal cases.
                </p>
              </div>
              <div className="flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
                <Search className="text-[#00b9ed] w-7 h-7 mt-1" />
                <p className="text-gray-700 text-lg">
                  <span className="font-semibold">Comprehensive Services:</span> 
                  From phone investigations to financial and legal cases.
                </p>
              </div>
              <div className="flex items-start gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
                <Briefcase className="text-[#00b9ed] w-7 h-7 mt-1" />
                <p className="text-gray-700 text-lg">
                  <span className="font-semibold">Tailored Solutions:</span> 
                  Every case is customized to deliver precise, accurate results.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full h-full">
            <img
              src="/Why%20Choose%20Us.jpg"
              alt="Private investigation services"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

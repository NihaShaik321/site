// // Footer.js

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6">

      
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="mb-4 md:mb-8 md:w-1/4 lg:ml-0 md:ml-0 sm:ml-0 ml-0">
//             <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Logo</h2>
//             <p className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet justo ut ullamcorper gravida.</p>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-gray-500">About Us</a></li>
//               <li><a href="#" className="hover:text-gray-500">Careers</a></li>
//               <li><a href="#" className="hover:text-gray-500">Press</a></li>
//             </ul>
//           </div>
//           <div className="mb-4 md:mb-8 md:w-1/4">
//             <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Products</h2>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-gray-500">Features</a></li>
//               <li><a href="#" className="hover:text-gray-500">Pricing</a></li>
//               <li><a href="#" className="hover:text-gray-500">FAQ</a></li>
//             </ul>
//           </div>
//           <div className="mb-4 md:mb-8 md:w-1/4">
//             <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Products</h2>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-gray-500">Features</a></li>
//               <li><a href="#" className="hover:text-gray-500">Pricing</a></li>
//               <li><a href="#" className="hover:text-gray-500">FAQ</a></li>
//             </ul>
//           </div>
//           <div className="mb-4 md:mb-8 md:w-1/4">
//             <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Connect</h2>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-gray-500">Contact Us</a></li>
//               <li><a href="#" className="hover:text-gray-500">Support</a></li>
//               <li><a href="#" className="hover:text-gray-500">Privacy Policy</a></li>
//             </ul>
//           </div>
//           <div className="md:w-1/4">
//             <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Follow Us</h2>
//             <div className="flex space-x-4 mb-2 md:mb-4">
//               <a href="#" className="hover:text-gray-500">
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a href="#" className="hover:text-gray-500">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="hover:text-gray-500">
//                 <i className="fab fa-linkedin"></i>
//               </a>
//               <a href="#" className="hover:text-gray-500">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>
//             <p className="text-sm">Stay connected with us on social media for updates and announcements.</p>
//           </div>
//         </div>
//         <div className="mt-4 md:mt-8 border-t border-gray-500 pt-4 md:pt-8 flex flex-col items-center">
//           <h2 className="text-2xl md:text-3xl font-extrabold mb-2 md:mb-4">Subscribe to Our Newsletter</h2>
//           <p className="text-sm mb-4 md:mb-8">Get the latest updates and news straight to your inbox.</p>
//           <div className="flex flex-col items-center md:flex-row">
//             <input
//               type="email"
//               placeholder="Your Email Address"
//               className="w-full md:w-64 px-4 py-2 mb-2 md:mb-0 border border-gray-600 rounded-l focus:outline-none"
//             />
//             <button className="bg-blue-500 text-white px-6 py-2 rounded-r hover:bg-blue-600 focus:outline-none">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="mt-4 md:mt-8 text-center">
//         <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">

      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-8 md:w-1/4 lg:ml-0 md:ml-0 sm:ml-0 ml-0">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 ml-3">Logo</h2>
            <p className="text-sm mb-2 ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet justo ut ullamcorper gravida.</p>
            <ul className="space-y-2 ml-3">
              <li><a href="#" className="hover:text-gray-500">About Us</a></li>
              <li><a href="#" className="hover:text-gray-500">Careers</a></li>
              <li><a href="#" className="hover:text-gray-500">Press</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-8 md:w-1/4">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 ml-3">Company info</h2>
            <ul className="space-y-2 ml-3">
              <li><a href="#" className="hover:text-gray-500">Features</a></li>
              <li><a href="#" className="hover:text-gray-500">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-500">FAQ</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-8 md:w-1/4">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 ml-3">Services</h2>
            <ul className="space-y-2 ml-3">
              <li><a href="#" className="hover:text-gray-500">Features</a></li>
              <li><a href="#" className="hover:text-gray-500">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-500">FAQ</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-8 md:w-1/4">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 ml-3">Contact</h2>
            <ul className="space-y-2 ml-3">
              <li><a href="#" className="hover:text-gray-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-500">Support</a></li>
              <li><a href="#" className="hover:text-gray-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="md:w-1/4">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 ml-3">Follow Us</h2>
            <div className="flex space-x-4 mb-2 md:mb-4 ml-3">
              <a href="#" className="hover:text-gray-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-gray-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-500">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-gray-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <p className="text-sm ml-3">Stay connected with us on social media for updates and announcements.</p>
          </div>
        </div>
        <div className="mt-4 md:mt-8 border-t border-gray-500 pt-4 md:pt-8 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 md:mb-4 ml-3">Subscribe to Our Newsletter</h2>
          <p className="text-sm mb-4 md:mb-8 ml-3">Get the latest updates and news straight to your inbox.</p>
          <div className="flex flex-col items-center md:flex-row">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full md:w-64 px-4 py-2 mb-2 md:mb-0 border border-gray-600 rounded-l focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-r hover:bg-blue-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-8 text-center">
        <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;











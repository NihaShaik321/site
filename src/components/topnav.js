// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// const TopNav = () => {
//   return (
//     <nav className='bg-gray-800 py-1 px-4 md:px-8'>
//       <div className='container sticky mx-auto flex justify-between items-center'>
//         <div className='text-white flex items-center'>
//           <FontAwesomeIcon icon={faPhone} />
//           <span className='ml-2'>1234543-432543</span>
//         </div>

      //   <div className='text-white flex items-center'>
      //     <FontAwesomeIcon icon={faMapMarkerAlt} />
      //     <span className='ml-2'>Hyderabad</span>
      //   </div>
      // </div>
//     </nav>
//   );
// };

// export default TopNav;
import React from 'react'

const topnav = () => {
  return (
    <div className='bg-gray-800 w-full sticky'>
      <div className='flex justify-between'>
      <div className='text-white flex items-center ml-4'>
          <FontAwesomeIcon icon={faPhone} />
           <span className='ml-2'>1234543-432543</span>
       </div>

      <div className='text-white flex items-center'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span className='ml-2 mr-7'>Hyderabad</span>
        </div>
        </div>
      
    </div>
  );
};

export default topnav


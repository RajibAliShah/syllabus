
import Link from 'next/link';

function Header() {
  return (
    
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <a className="text-xl font-bold text-gray-50 hover:text-gray-300">Panaverse Dao</a>
        
        <ul className="flex items-center">
        <a className="hover:text-gray-300">
          <li className="mx-2">Home
          </li></a>
          <a className="hover:text-gray-300 cursor-pointer" href='#about'>
          <li className="mx-2">About Us
          </li></a>
          <a className="hover:text-gray-300 cursor-pointer" href='#contact'>
          <li className="mx-2">Contact Us
          </li></a>
          {/* <li className="mx-2">
         
              <a className="hover:text-gray-300">About Us</a>
         
          </li>
          <li className="mx-2">
         
              <a className="hover:text-gray-300">Contact Us</a>
         
                   </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;

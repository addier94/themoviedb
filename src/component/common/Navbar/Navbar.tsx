import { GoThreeBars } from 'react-icons/go';
import { RiMovie2Fill } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';
import { GrFormSearch } from 'react-icons/gr';

const Navbar = () => (
  <div className="bg-gray2-main text-white p-4 lg:p-2">
    <div className="lg:flex items-center justify-between max-w-screen-2xl mx-auto">
      <nav className="flex justify-between">
        <GoThreeBars className="w-6 h-6 lg:hidden" />
        <RiMovie2Fill className="w-6 h-6" />
        <FaRegUser className="w-6 h-6 lg:hidden" />
        <ul className="hidden lg:flex ml-8">
          <li className="mr-6"><a href="/">Home</a></li>
          <li className="mr-6"><a href="/">Genre</a></li>
          <li className="mr-6"><a href="/">Country</a></li>
          <li className="mr-6"><a href="/">Movies</a></li>
          <li className="mr-6"><a href="/">TV Shows</a></li>
          <li className="mr-6"><a href="/">Top IMBD</a></li>
        </ul>
      </nav>
      <article className="lg:flex items-center ">
        <form className="px-1 flex items-center bg-white rounded-md mt-4 h-10 lg:mt-0">
          <GrFormSearch className="w-6 h-6" />
          <input className="w-full outline-none text-black" type="text" placeholder="Enter keywords" />
        </form>
        <a href="/" className="hidden lg:flex ml-5 items-center">
          <FaRegUser className="mr-2" />
          Login
        </a>
      </article>
    </div>
  </div>
);

export default Navbar;

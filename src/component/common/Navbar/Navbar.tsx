import { GoThreeBars } from 'react-icons/go';
import { RiMovie2Fill } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';
import { GrFormSearch } from 'react-icons/gr';
import './Navbar.css';

const Navbar = () => (
  <header className="bg-gray2-main text-white p-4 lg:p-2" id="navigation">
    <div className="lg:flex items-center justify-between max-w-screen-2xl mx-auto">
      <nav className="flex justify-between items-center">
        <GoThreeBars className="w-6 h-6 lg:hidden" />
        <RiMovie2Fill className="w-6 h-6" />
        <FaRegUser className="w-6 h-6 lg:hidden" />
        <ul className="nav__list">
          <li className=" nav__listitem">
            Home
            <ul className="nav__listitemdrop">
              <li>Our Team</li>
              <li>Our Team</li>
              <li>Our Team</li>
            </ul>
          </li>
          <li className=" nav__listitem">
            Genre
            <ul className="nav__listitemdrop">
              <li>Portfolio</li>
              <li>Portfolio</li>
            </ul>
          </li>
          <li className="nav__listitem"><a href="/">Country</a></li>
          <li className="nav__listitem"><a href="/">Movies</a></li>
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
  </header>
);

export default Navbar;

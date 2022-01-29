import { GoThreeBars } from 'react-icons/go';
import { RiMovie2Fill } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';
import { GrFormSearch } from 'react-icons/gr';
import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Auth } from 'component/Auth';
import { showAuthModal, showModal } from 'features/slice/Ui';
import { useDispatch } from 'react-redux';
import { AuthModal } from 'component/common/Modal';

const Navbar = () => {
  const navigate = useNavigate();
  const refNav = useRef<HTMLHeadingElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let lastScrollTop = 0;
    const wind: Window = window;
    const onScroll: EventListener = () => {
      const scrollTop = wind.scrollY;

      if (scrollTop > lastScrollTop && refNav.current) {
        refNav.current.style.top = '-64px';
      } else if (refNav.current) {
        refNav.current.style.top = '0px';
      }
      lastScrollTop = scrollTop;
    };
    wind.addEventListener('scroll', onScroll);

    return () => wind.removeEventListener('scroll', onScroll);
  }, [refNav.current]);
  return (
    <header ref={refNav} className="bg-gray2-main text-white p-4 lg:p-2 fixed z-50 top-0 w-full h-28 lg:h-16 duration-200">
      <div className="lg:flex items-center justify-between max-w-screen-2xl mx-auto">
        <nav className="flex justify-between items-center">
          <GoThreeBars className="w-6 h-6 lg:hidden" />
          <RiMovie2Fill className="w-6 h-6" onClick={() => navigate('/')} />
          <FaRegUser className="w-6 h-6 lg:hidden" />
          <ul className="nav__list">
            <li className=" nav__listitem">
              Home
              <ul className="nav__listitemdrop">
                <li><Link to="/top-rated">Top Related</Link></li>
                <li><Link to="/popular">Popular</Link></li>
                <li><Link to="/upcoming">Upcoming</Link></li>
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
          <button type="button" className="hidden lg:flex ml-5 items-center" onClick={() => dispatch(showAuthModal())}>
            <FaRegUser className="mr-2" />
            Login
          </button>
          <AuthModal>
            <Auth />
          </AuthModal>
        </article>
      </div>
    </header>
  );
};

export default Navbar;

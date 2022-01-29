import { FaUserCircle } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';

const LoginForm = () => {
  const resetPassword = () => {

  };
  return (
    <form className="bg-gray3-main max-w-sm w-full px-8 h-[410px]">
      <h6 className="bg-yellow-main flex justify-center relative mb-16">
        <span className="absolute bg-yellow-main px-12 py-3 -mt-[8px] rounded-sm">SIGN IN</span>
      </h6>
      <FaUserCircle className="w-24 h-24 mx-auto mb-8" />
      <div className="mb-4">
        <input type="email" name="email" className="peer mt-1 px-3 py-[10px] bg-white text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
      </div>

      <div>
        <input type="password" name="password" className="peer mt-1 px-3 py-[10px] bg-white text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
      </div>

      <div className="flex text-yellow-main justify-between mb-5 text-sm mt-2">
        <button className="duration-150 hover:opacity-70" type="button">
          <FiUsers className="inline-block mr-1" />
          Register
        </button>
        <button className="duration-150 hover:opacity-70" type="button">Forgot Password</button>
      </div>
      <button type="submit" className="bg-yellow-main w-full py-[10px] duration-150 rounded-md hover:opacity-70">Login</button>
    </form>
  );
};

export default LoginForm;

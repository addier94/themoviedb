import { appSelector } from 'features/hooks';
import { authLogin } from 'features/slice/authSlice';
import { setAuthModalView } from 'features/slice/Ui';
import { FormEvent, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { FaUserCircle } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { authModalViewT } from 'types/UiType';
import './LoginView.css';

const LoginView = () => {
  const { loading } = appSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const user = { email, password };
    dispatch(authLogin(user));
  };
  const dispatch = useDispatch();
  return (
    <form onSubmit={handleSubmit} className="LoginView bg-gray3-main max-w-sm w-full px-8 h-[410px] m-auto">
      <h6 className="bg-yellow-main flex justify-center relative mb-16">
        <span className="absolute bg-yellow-main px-12 py-3 -mt-[8px] rounded-sm">SIGN IN</span>
      </h6>
      <FaUserCircle className="w-24 h-24 mx-auto mb-8" />
      <div className="mb-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required name="email" className="auth__input" placeholder="you@example.com" />
      </div>

      <div>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="auth__input" placeholder="Enter your password" />
      </div>

      <div className="flex text-yellow-main justify-between mb-5 text-sm mt-2">
        <button onClick={() => dispatch(setAuthModalView(authModalViewT.SIGNUP_VIEW))} className="duration-150 hover:opacity-70 cursor-pointer" type="button">
          <FiUsers className="inline-block mr-1" />
          Register
        </button>
        <button onClick={() => dispatch(setAuthModalView(authModalViewT.FORGOT_PASSWORD_VIEW))} className="duration-150 hover:opacity-70 cursor-pointer" type="button">Forgot Password</button>
      </div>
      <button type="submit" disabled={loading} className="bg-yellow-main font-bold w-full py-[10px] duration-150 rounded-md hover:opacity-70 btn__disabled">
        {loading ? <CgSpinner className="animate-spin w-6 h-6 inline-block align-bottom" /> : 'Login'}
      </button>
    </form>
  );
};

export default LoginView;

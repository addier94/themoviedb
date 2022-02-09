import { appSelector } from 'features/hooks';
import { authLogin } from 'features/slice/authSlice';
import { setAuthModalView } from 'features/slice/Ui';
import { FormEvent, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { FaUserCircle } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { authModalViewT } from 'types/UiType';
import './ForgotPasswordView.css';

const ForgotPasswordView = () => {
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
    <form onSubmit={handleSubmit} className="LoginView bg-gray3-main max-w-sm w-full px-8 h-[300px] m-auto">
      <h6 className="bg-yellow-main flex justify-center relative mb-16">
        <span className="absolute bg-yellow-main px-12 py-3 -mt-[8px] rounded-sm">Forgot Password</span>
      </h6>
      <FaUserCircle className="w-24 h-24 mx-auto mb-8" />
      <div className="mb-4 grid grid-cols-12 gap-x-2">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required name="email" className="auth__input col-span-9" placeholder="you@example.com" />
        <button type="submit" disabled={loading} className=" col-span-3 bg-yellow-main font-bold w-full py-[10px] duration-150 rounded-md hover:opacity-70 btn__disabled">
          {loading ? <CgSpinner className="animate-spin w-6 h-6 inline-block align-bottom" /> : 'Send'}
        </button>
      </div>

      <div className="flex text-yellow-main justify-between mb-5 text-sm mt-2">
        <button onClick={() => dispatch(setAuthModalView(authModalViewT.SIGNUP_VIEW))} className="duration-150 hover:opacity-70 cursor-pointer" type="button">
          <FiUsers className="inline-block mr-1" />
          Register
        </button>
        <button onClick={() => dispatch(setAuthModalView(authModalViewT.LOGIN_VIEW))} className="duration-150 hover:opacity-70 cursor-pointer" type="button">Login</button>
      </div>
    </form>
  );
};

export default ForgotPasswordView;

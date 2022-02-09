import { Errors } from 'component/common';
import { appDispatch, appSelector } from 'features/hooks';
import { authRegister } from 'features/slice/authSlice';
import { setAuthModalView } from 'features/slice/Ui';
import { FormEvent, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { authModalViewT } from 'types/UiType';
import { validRegister } from 'utils/valid';
import './RegisterView.css';
import { CgSpinner } from 'react-icons/cg';

const RegisterView = () => {
  const { loading } = appSelector((state) => state.auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cf_password, setCfPassword] = useState('');

  const dispatch = appDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = {
      name, email, password, cf_password,
    };
    const result = validRegister(user);
    if (result.errLength) { return toast.error(() => <Errors errors={result.errMsg} />); }

    dispatch(authRegister(user));
  };

  return (
    <form onSubmit={handleSubmit} className="RegisterView bg-gray3-main max-w-sm w-full px-8 h-[526px] m-auto">
      <h6 className="bg-yellow-main flex justify-center relative mb-16">
        <span className="absolute bg-yellow-main px-12 py-3 -mt-[8px] rounded-sm">SIGN UP</span>
      </h6>
      <FaUserCircle className="w-24 h-24 mx-auto mb-8" />
      <div className="mb-4">
        <input type="name" name="name" className="auth__input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-4">
        <input type="email" name="email" className="auth__input" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="mb-4">
        <input type="password" name="password" className="auth__input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div>
        <input type="password" name="cf_password" className="auth__input" placeholder="Confirm your password" value={cf_password} onChange={(e) => setCfPassword(e.target.value)} />
      </div>

      <div className="flex text-yellow-main justify-between mb-5 text-sm mt-2">
        <button onClick={() => dispatch(setAuthModalView(authModalViewT.LOGIN_VIEW))} className="duration-150 hover:opacity-70 cursor-pointer" type="button">
          <FiUsers className="inline-block mr-1" />
          Login
        </button>

      </div>
      <button type="submit" disabled={loading} className="bg-yellow-main font-bold w-full py-[10px] duration-150 rounded-md hover:opacity-70 btn__disabled">
        {loading ? <CgSpinner className="animate-spin w-6 h-6 inline-block align-bottom" /> : 'Register'}
      </button>
    </form>
  );
};

export default RegisterView;

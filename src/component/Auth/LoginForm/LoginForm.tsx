import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const LoginForm = () => {
  const resetPassword = () => {

  };
  return (
    <form className="bg-gray3-main max-w-sm mx-auto px-8 pb-4">
      <h6 className="mb-8">SIGN IN</h6>
      <FaUserCircle className="w-24 h-24 mx-auto mb-8" />
      <div className="mb-4">
        <input className="w-full rounded-lg p-2" name="email" type="email" placeholder="email" />
      </div>
      <div>
        <input className="w-full rounded-lg p-2" name="password" type="password" placeholder="Password" />
      </div>
      <div>
        <button type="button">Registrarse</button>
        <div>
          <button className="submit" type="submit">Entrar</button>
          <button type="button">Forgot password</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

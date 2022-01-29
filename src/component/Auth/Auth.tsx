import React, { useState } from 'react';
import { LoginForm, RegisterForm } from '.';

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  return showLogin ? (
    <LoginForm />
  ) : (
    <RegisterForm />
  );
};

export default Auth;

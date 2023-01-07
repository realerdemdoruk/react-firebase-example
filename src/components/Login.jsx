import React from 'react';
import { auth, provider } from '../firabase';

const Login = () => {
  const login = () => {
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div>
      <button onClick={login}>Google ile giriş yap</button>
    </div>
  );
};

export default Login;

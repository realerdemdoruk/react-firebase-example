import React from 'react';
import { auth, provider } from '../firabase';
import { Container } from 'react-bootstrap';

const Login = () => {
  const login = () => {
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <Container
      fluid
      style={{ height: '100vh' }}
      className="d-flex justify-content-center bg-dark align-items-center"
    >
      <button onClick={login} class="btn btn-light">
        Google ile giriş yap
      </button>
    </Container>
  );
};

export default Login;

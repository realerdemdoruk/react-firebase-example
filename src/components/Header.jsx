import React from 'react';
import { auth } from '../firabase';
import Button from 'react-bootstrap/Button';

const Header = ({ user }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-danger">
        <a className="navbar-brand mx-auto text-white ">
          Hoşgeldin, {user.displayName}
          <Button
            variant="warning"
            className="mx-5"
            onClick={() => auth.signOut()}
          >
            Çıkış Yap!
          </Button>
        </a>
      </nav>
    </div>
  );
};

export default Header;

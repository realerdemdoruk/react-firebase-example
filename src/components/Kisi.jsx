import React from 'react';
import db from '../firabase';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
export const Kisi = ({
  id,
  name,
  surname,
  name1,
  surname1,
  setName,
  setSurname,
}) => {
  const sil = () => {
    db.collection('kisiler').doc(id).delete();
  };

  const guncelle = () => {
    db.collection('kisiler').doc(id).update({
      name: name1,
      surname: surname1,
    });
  };

  return (
    <Container className="bg-dark  text-light d-flex justify-content-center bg-dark align-items-center ">
      <div className="row">
        <div className="col d-flex mt-3">
          <h3>
            {name} {surname}
          </h3>
          <Button variant="danger mx-2" className="mb-3" onClick={sil}>
            Sil
          </Button>
          <Button
            disabled={!name1 || !surname1}
            variant="warning"
            onClick={guncelle}
            className="mb-3"
          >
            Güncelle
          </Button>
        </div>
      </div>
    </Container>
  );
};

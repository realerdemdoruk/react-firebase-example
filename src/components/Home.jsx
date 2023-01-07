import React, { useEffect } from 'react';
import db from '../firabase';
import { useState } from 'react';
import { Kisi } from './Kisi';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

const Home = ({ user }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [kisiler, setKisiler] = useState([]);

  useEffect(() => {
    db.collection('kisiler').onSnapshot((snapshot) => {
      setKisiler(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const add = (e) => {
    e.preventDefault();
    db.collection('kisiler').add({
      name: name,
      surname: surname,
    });
    setName('');
    setSurname('');
  };

  return (
    <div>
      <Header user={user} />
      <Container className="bg-dark mt-5 d-flex justify-content-center  align-items-center">
        <Form>
          <div className="col">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Adınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </div>
          <div className="col">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Soyadınız"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </InputGroup>
          </div>
          <div className="col  d-flex justify-content-center  align-items-center">
            <Button
              disabled={!name || !surname}
              variant="success"
              onClick={add}
              className="mb-3"
            >
              Ekle
            </Button>
          </div>
        </Form>
      </Container>
      <div>
        {kisiler.map(({ id, data }) => (
          <Kisi
            key={id}
            id={id}
            name={data.name}
            surname={data.surname}
            name1={name}
            surname1={surname}
            setName={setName}
            setSurname={setSurname}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

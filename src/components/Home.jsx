import React, { useEffect } from 'react';
import db, { auth } from '../firabase';
import { useState } from 'react';
import { Kisi } from './Kisi';

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
      Hoşgeldin,{user.displayName}
      <button onClick={() => auth.signOut()}>Çıkış Yap!</button>
      <form>
        İsim:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="İsim"
        />
        Soyisim:
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Soyisim"
        />
        <button onClick={add}>Ekle</button>
      </form>
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

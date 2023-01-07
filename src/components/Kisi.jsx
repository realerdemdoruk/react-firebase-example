import React from 'react';
import db from '../firabase';
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
    setName('');
    setSurname('');
  };

  return (
    <div>
      <h3>
        {name} {surname}
      </h3>
      <button onClick={sil}>Sil</button>
      <button onClick={guncelle}> Güncelle </button>
    </div>
  );
};

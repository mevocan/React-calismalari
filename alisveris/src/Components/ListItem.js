import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Liste from '../kategoriler/Liste';

const ListItem = () => {
  const { text } = useParams();

  const item = Liste.find(item => item.text.toLowerCase() === text.toLowerCase());

  if (!item) {
    return <div>Sayfa bulunamadı.</div>;
  }

  const { subItems } = item;

  const url = text
    .replace(/\s/g, "-")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/Ğ/g, "G")
    .replace(/Ü/g, "U")
    .replace(/Ş/g, "S")
    .replace(/İ/g, "I")
    .replace(/Ö/g, "O")
    .replace(/Ç/g, "C")
    .toLowerCase();

  return (
    <div>
      <Link to="/">Ana Sayfa</Link>
      <h1>{item.text}</h1>
      {subItems && subItems.length > 0 && (
        <ul className="sub-nav">
          {subItems.map((item, index) => (
            <ListItem key={index} text={item.text} subItems={item.subItems} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListItem;

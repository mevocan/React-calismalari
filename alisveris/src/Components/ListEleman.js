import React from 'react';
import { Link } from 'react-router-dom';
import Liste from '../kategoriler/Liste';

const ListEleman = () => {
  return (
    <ul className="main-nav">
      {Liste.map((item, index) => (
        <li key={index}>
          <Link to={`/${item.text}`} className="category-header">{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ListEleman;


import React, { useState } from 'react';
import "./Yardim.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`card ${isOpen ? 'open' : ''}`}>
      <div className="card-body" onClick={toggleCard}>
        <h5 className={`card-title d-flex justify-content-between ${isOpen ? 'orange' : ''}`}>{title}{isOpen ? <FontAwesomeIcon className='icon' icon={faMinus} />: <FontAwesomeIcon className='icon' icon={faPlus} />}</h5>
        <p className="card-text">{content}</p>
        <div className="card-link" >
          Daha fazla bilgi
        </div>
        {isOpen && (
          <div className="card-content">
            <p>Bu açılan içerik'e ait.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

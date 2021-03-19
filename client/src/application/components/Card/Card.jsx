import React from 'react';
import TextRow from '../TextRow/TextRow';
import './Card.scss';

const Card = ({ imgSrc, info, isMobile }) => {
  const mobileClass = isMobile ? ' Card_mobile' : '';
  return (
    <div className={'Card' + mobileClass}>
      {imgSrc && (
        <div className="Card-img">
          <img src={imgSrc} alt="" />
        </div>
      )}
      {info && <div className="Card-info">{info}</div>}
    </div>
  );
};

export default Card;

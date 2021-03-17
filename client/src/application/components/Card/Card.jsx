import React from 'react';
import './Card.scss';

const Card = ({ imgSrc, title, album, icon, isMobile }) => {
  const mobileClass = isMobile ? ' Card_mobile' : '';
  return (
    <div className={'Card' + mobileClass}>
      {imgSrc && (
        <div className="Card-img">
          <img src={imgSrc} alt="" />
        </div>
      )}

      {title && <div className="Card-title">{title}</div>}

      <div className="Card-album">{album}</div>
      {icon && <div className="Card-icon">{icon}</div>}
    </div>
  );
};

export default Card;

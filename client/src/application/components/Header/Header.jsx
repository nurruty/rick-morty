import './Header.scss';
import React from 'react';
import { isMobile } from '../../../utils';

const Header = ({ left, center, right }) => {
  const mobileClass = isMobile() ? ' Header_mobile' : '';

  return (
    <div className={'Header' + mobileClass}>
      <div className="Header-sections-container">
        <div className="Header-sections">
          <div className="Header-section Header-section_left">{left}</div>
          <div className="Header-section Header-section_center">{center}</div>
          <div className="Header-section Header-section_right">{right}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

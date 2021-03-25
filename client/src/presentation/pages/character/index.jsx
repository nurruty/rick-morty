import './Character.scss';
import React from 'react';
import Profile from '../../components/Profile/Profile';
import TextRow from '../../components/TextRow/TextRow';
import useCharacters from '../../../application/hooks/useCharacters';
import Icon from '../../components/Icon/Icon';

const Character = ({ isMobileSize }) => {
  const { character = {}, updateFavouriteCharacter } = useCharacters();
  const {
    image,
    name = '',
    status = '',
    species = '',
    location = '',
    origin = '',
    gender = '',
    type = '',
    episodes = 0,
    isFavourite = false,
  } = character;

  const handleClickFavIcon = (character) => {
    updateFavouriteCharacter && updateFavouriteCharacter(character);
  };

  const mobileClass = isMobileSize ? ' Character_mobile' : '';
  console.log('🚀 ~ file: index.jsx ~ line 28 ~ Character ~ isMobileSize', isMobileSize);

  return (
    <div className={'Character' + mobileClass}>
      <Profile
        isMobileSize={isMobileSize}
        imgSrc={image}
        profileInfo={
          <div className="Character-info">
            <div className="Character-info-left">
              <TextRow key="p1" title={name} subtitle={status + '-' + species} type="big" />
              <TextRow key="p2" title={'Last known location'} subtitle={location} type="big" />
              <TextRow key="p3" title={'First seen in'} subtitle={origin} type="big" />
            </div>
            <div className="Character-info-right">
              <TextRow key="p4" title={'Gender'} subtitle={gender} type="big" />
              <TextRow key="p5" title={'Type'} subtitle={type} type="big" />
              <TextRow key="p6" title={'Episodes'} subtitle={episodes} type="big" />
            </div>
          </div>
        }
        actionComponent={
          <Icon
            name="heart"
            color={isFavourite ? 'red' : 'white'}
            onClick={(e) => {
              e.stopPropagation();
              handleClickFavIcon(character);
            }}
          />
        }
      />
    </div>
  );
};

export default Character;

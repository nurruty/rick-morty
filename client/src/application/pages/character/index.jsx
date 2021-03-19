import './Character.scss';
import React, { useCallback } from 'react';
import Profile from '../../components/Profile/Profile';
import TextRow from '../../components/TextRow/TextRow';
import useCharacter from '../../hooks/useCharacter';

const Character = () => {
  const { character = {} } = useCharacter();
  const {
    image,
    name = '',
    status = '',
    species = '',
    location = '',
    origin = '',
    episodes = [],
  } = character;

  return (
    <div className="Character">
      <Profile
        imgSrc={image}
        profileInfo={
          <>
            <TextRow key="p1" title={name} subtitle={status + '-' + species} type="big" />
            <TextRow key="p2" title={'Last known location'} subtitle={location} type="big" />
            <TextRow key="p3" title={'First seen in'} subtitle={origin} type="big" />
          </>
        }
        extraInfo={
          <>
            <TextRow title={'Episodes'} type="big" />
            <ul>
              {episodes.map((value, indx) => {
                const { name, episode, air_date } = value;
                return (
                  <li key={indx}>
                    <TextRow key="p1" title={name + '-' + episode} subtitle={air_date} type="medium" />
                  </li>
                );
              })}
            </ul>
          </>
        }
      />
    </div>
  );
};

export default Character;

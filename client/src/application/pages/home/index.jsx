import './Home.scss';
import React from 'react';
import Card from '../../components/Card/Card';
import useCharacters from '../../hooks/useCharacters';
import { useRouter } from '../../hooks/useRouter';
import TextRow from '../../components/TextRow/TextRow';
import Icon from '../../components/Icon/Icon';

const HomePage = () => {
  const { characters, updateFavouriteCharacter } = useCharacters();
  console.log('🚀 ~ file: index.jsx ~ line 11 ~ HomePage ~ characters', characters);
  const { push } = useRouter();

  const handleClickCharacter = (characterId) => {
    push(`/character/${characterId}`);
  };

  const handleClickFavIcon = (character) => {
    updateFavouriteCharacter && updateFavouriteCharacter(character);
  };

  return (
    <div className="Home">
      <div className="Home-grid">
        {characters.map((character) => {
          const {
            id,
            image,
            name = '',
            status = '',
            species = '',
            location = '',
            origin = '',
            isFavourite = false,
          } = character;
          return (
            <div key={id} className="Home-grid-item" onClick={() => handleClickCharacter(id)}>
              <Card
                imgSrc={image}
                info={
                  <>
                    <TextRow title={name} subtitle={status + '-' + species} type="medium" />
                    <TextRow title={'Last known location'} subtitle={location} />
                    <TextRow title={'First seen in'} subtitle={origin} />
                  </>
                }
                actionComponent={
                  <Icon
                    name="heart"
                    size="nano"
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
        })}
      </div>
      <button onClick={() => push('?page=2')}>NEXT</button>
    </div>
  );
};

export default HomePage;

import './Home.scss';
import React from 'react';
import Card from '../../components/Card/Card';
import useCharacters from '../../hooks/useCharacters';
import { useRouter } from '../../hooks/useRouter';
import TextRow from '../../components/TextRow/TextRow';
import Icon from '../../components/Icon/Icon';

const HomePage = () => {
  // const [chracters] = useCharacters();
  const { characters, updateFavouriteCharacter } = useCharacters();
  const { push } = useRouter();

  const handleClickCharacter = (characterId) => {
    push(`/character/${characterId}`);
  };

  const handleClickFavIcon = (characterId) => {
    updateFavouriteCharacter && updateFavouriteCharacter(characterId);
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
                      handleClickFavIcon(id);
                    }}
                  />
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;

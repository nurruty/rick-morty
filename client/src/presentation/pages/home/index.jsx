import './Home.scss';
import React from 'react';
import Card from '../../components/Card/Card';
import useCharacters from '../../../application/hooks/useCharacters';
import { useRouter } from '../../../application/hooks/useRouter';
import TextRow from '../../components/TextRow/TextRow';
import Icon from '../../components/Icon/Icon';
import usePagination from '../../../application/hooks/usePagination';

const HomePage = () => {
  const { characters, updateFavouriteCharacter } = useCharacters();
  const { goToPage } = usePagination();
  const { push, query } = useRouter();
  const { page = '1' } = query;

  const handleClickCharacter = (characterId) => {
    push(`/character/${characterId}`);
  };

  const handleClickFavIcon = (character) => {
    updateFavouriteCharacter && updateFavouriteCharacter(character);
  };

  const handleClickPage = () => {
    const nextPage = parseInt(page) + 1;
    goToPage(nextPage, 'characters');
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
      <button onClick={() => handleClickPage()}>NEXT</button>
    </div>
  );
};

export default HomePage;

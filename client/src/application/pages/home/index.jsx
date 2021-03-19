import './Home.scss';
import React, { useCallback } from 'react';
import Card from '../../components/Card/Card';
import useCharacters from '../../hooks/useCharacters';
import { useRouter } from '../../hooks/useRouter';
import TextRow from '../../components/TextRow/TextRow';

const HomePage = () => {
  const [chracters] = useCharacters();
  const { push } = useRouter();

  const onClickCard = (characterId) => {
    push(`/character/${characterId}`);
  };

  return (
    <div className="Home">
      <div className="Home-grid">
        {chracters.map((character) => {
          const { image, name = '', status = '', species = '', location = '', origin = '' } = character;
          return (
            <div key={character.id} className="Home-grid-item" onClick={() => onClickCard(character.id)}>
              <Card
                imgSrc={image}
                info={
                  <>
                    <TextRow title={name} subtitle={status + '-' + species} type="medium" />
                    <TextRow title={'Last known location'} subtitle={location} />
                    <TextRow title={'First seen in'} subtitle={origin} />
                  </>
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

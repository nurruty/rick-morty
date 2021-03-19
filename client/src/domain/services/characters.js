import { get, post } from '../../infrastructure/api';
import {
  GET_CHARACTERS_API_PATH,
  GET_CHARACTER_API_PATH,
  ADD_FAVOURITE_CHARACTER_API_PATH,
  DELETE_FAVOURITE_CHARACTER_API_PATH,
} from '../../utils/constants';
import { createCharacters, createCharacter } from '../entities/character';
import { createError } from '../entities/error';

const getCharactersService = () =>
  get(GET_CHARACTERS_API_PATH)
    .then((response) => {
      const { data } = response;
      return createCharacters(temp);
    })
    .catch(createError);

const getCharacterService = (characterId) =>
  get(`${GET_CHARACTER_API_PATH}?${characterId}`)
    .then((response) => {
      const { data } = response;
      return createCharacter(temp[0]);
    })
    .catch(createError);

const addFavouriteCharacterService = ({ isFavourite, characterId }) =>
  post(ADD_FAVOURITE_CHARACTER_API_PATH, {
    isFavourite,
    characterId,
  }).catch(createError);

const deleteFavouriteCharacterService = ({ isFavourite, characterId }) =>
  post(DELETE_FAVOURITE_CHARACTER_API_PATH, {
    isFavourite,
    characterId,
  }).catch(createError);

export {
  getCharacterService,
  getCharactersService,
  addFavouriteCharacterService,
  deleteFavouriteCharacterService,
};

const temp = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: 'Earth (C-137)',
    location: 'Earth (Replacement Dimension)',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      'https://rickandmortyapi.com/api/episode/3',
      'https://rickandmortyapi.com/api/episode/4',
      'https://rickandmortyapi.com/api/episode/5',
      'https://rickandmortyapi.com/api/episode/6',
      'https://rickandmortyapi.com/api/episode/7',
      'https://rickandmortyapi.com/api/episode/8',
      'https://rickandmortyapi.com/api/episode/9',
      'https://rickandmortyapi.com/api/episode/10',
      'https://rickandmortyapi.com/api/episode/11',
      'https://rickandmortyapi.com/api/episode/12',
      'https://rickandmortyapi.com/api/episode/13',
      'https://rickandmortyapi.com/api/episode/14',
      'https://rickandmortyapi.com/api/episode/15',
      'https://rickandmortyapi.com/api/episode/16',
      'https://rickandmortyapi.com/api/episode/17',
      'https://rickandmortyapi.com/api/episode/18',
      'https://rickandmortyapi.com/api/episode/19',
      'https://rickandmortyapi.com/api/episode/20',
      'https://rickandmortyapi.com/api/episode/21',
      'https://rickandmortyapi.com/api/episode/22',
      'https://rickandmortyapi.com/api/episode/23',
      'https://rickandmortyapi.com/api/episode/24',
      'https://rickandmortyapi.com/api/episode/25',
      'https://rickandmortyapi.com/api/episode/26',
      'https://rickandmortyapi.com/api/episode/27',
      'https://rickandmortyapi.com/api/episode/28',
      'https://rickandmortyapi.com/api/episode/29',
      'https://rickandmortyapi.com/api/episode/30',
      'https://rickandmortyapi.com/api/episode/31',
      'https://rickandmortyapi.com/api/episode/32',
      'https://rickandmortyapi.com/api/episode/33',
      'https://rickandmortyapi.com/api/episode/34',
      'https://rickandmortyapi.com/api/episode/35',
      'https://rickandmortyapi.com/api/episode/36',
      'https://rickandmortyapi.com/api/episode/37',
      'https://rickandmortyapi.com/api/episode/38',
      'https://rickandmortyapi.com/api/episode/39',
      'https://rickandmortyapi.com/api/episode/40',
      'https://rickandmortyapi.com/api/episode/41',
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: 'Earth (C-137)',
    location: 'Earth (Replacement Dimension)',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episodes: [
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
    ],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z',
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: 'Earth (Replacement Dimension)',
    location: 'Earth (Replacement Dimension)',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episodes: [
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
      {
        name: 'Lawnmower Dog',
        air_date: 'December 9, 2013',
        episode: 'S01E02',
      },
    ],
    url: 'https://rickandmortyapi.com/api/character/3',
    created: '2017-11-04T19:09:56.428Z',
  },
];

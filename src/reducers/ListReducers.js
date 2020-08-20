import {
  LIST_START,
  LIST_SUCCESS,
  LIST_FAILD,
} from '../actions/types';

const INITIAL_STATE = {
  loadingCharacter: false,
  characters: [
    {
      _id: '5f370655b09cbf4c4013b06f',
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
      __v: 0,
    },
  ],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_START:
      return {
        ...state,
        loadingCharacter: true,
      };

    case LIST_SUCCESS:
      return {
        ...state,
        loadingCharacter: false,
        characters: action.payload.characters,
      };

    case LIST_FAILD:
      return {
        ...state,
        loadingCharacter: false,
      };

    default:
      return state;
  }
};

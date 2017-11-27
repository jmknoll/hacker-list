import {
  FETCH_STORIES
} from '../actions/actionTypes';

const initialState = {
  stories: ['story 1', 'story 2']
};

export default function reducer(state=initialState, action) {
  console.log('running reducer')
    console.log(state)
  switch(action.type) {
    case FETCH_STORIES: 
      const stories = action.data
      return {
        ...state,
        stories
      };

    default:
      return state;
  }
}
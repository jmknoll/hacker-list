import {
  FETCH_STORIES_SUCCESS
} from './actionTypes';

const initialState = {
  stories: null
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_STORIES_SUCCESS:
      const stories = action.data.stories
      return {
        ...state,
        stories
      };

    default:
      return state;
  }
}
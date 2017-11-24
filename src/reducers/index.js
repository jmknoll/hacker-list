import {
  FETCH_STORIES
} from '../actions/actionTypes';

const initialState = {
  stories: null
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_STORIES:
      const stories = action.payload
      return {
        ...state,
        stories
      };

    default:
      return state;
  }
}
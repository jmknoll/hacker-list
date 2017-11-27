import {
  FETCH_TOP_STORIES
} from '../actions/actionTypes';

const initialState = {
  stories: []
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_TOP_STORIES: 
      console.log('running fetchTopStores')
      console.log(action)
      const stories = action.data
      return {
        ...state,
        stories
      };

    default:
      return state;
  }
}
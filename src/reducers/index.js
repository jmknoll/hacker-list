import {
  FETCH_TOP_STORIES,
  FETCH_TOP_STORY_IDS,
  FETCH_NEXT_TOP_STORIES
} from '../actions/actionTypes';

const initialState = {
  stories: []
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_TOP_STORY_IDS:
      const topStoryIds = action.data;
      return {
        ...state,
        topStoryIds
      };
    case FETCH_TOP_STORIES: 
      const stories = action.data;
      return {
        ...state,
        stories
      };
    case FETCH_NEXT_TOP_STORIES:
      const next_stories = action.data;
      console.log('state according to fnts reducer case')
      console.log(state)
      return {
        ...state,
        stories
      }
    default:
      return state;
  }
}
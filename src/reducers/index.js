import {
  FETCH_TOP_STORIES,
  FETCH_TOP_STORY_IDS,
  FETCH_NEXT_TOP_STORIES,
  FETCH_TOP_STORY_IDS_SUCCESS,
  FETCH_TOP_STORY_IDS_FAILURE,
  FETCH_TOP_STORIES_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  topStories: [],
  startIndex: 0
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_TOP_STORY_IDS_SUCCESS:
      const topStoryIds = action.data;
      return {
        ...state,
        topStoryIds
      };
    case FETCH_TOP_STORIES_SUCCESS:
      let topStories = state.topStories.concat(action.data);
      let startIndex = state.startIndex + action.data.length
      return {
        ...state,
        topStories,
        startIndex
      };
    default:
      return state;
  }
}
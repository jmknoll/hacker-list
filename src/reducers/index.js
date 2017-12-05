import {
  FETCH_TOP_STORIES,
  FETCH_TOP_STORY_IDS,
  FETCH_NEXT_TOP_STORIES,
  FETCH_TOP_STORY_IDS_SUCCESS,
  FETCH_TOP_STORY_IDS_FAILURE
} from '../actions/actionTypes';

const initialState = {
  stories: [],
  sIndex: 0
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_TOP_STORY_IDS_SUCCESS:

      console.log(action)
      const topStoryIds = action.data;
      return {
        ...state,
        topStoryIds
      };
    case FETCH_TOP_STORIES: 
      const stories = action.data;
      var sIndex = state.sIndex + stories.length;
      return {
        ...state,
        stories,
        sIndex
      };
    case FETCH_NEXT_TOP_STORIES:
      const nextStories = action.data;
      let newStories = state.stories.concat(nextStories)
      var sIndex = newStories.length + 1;
      return {
        ...state,
        stories: newStories,
        sIndex
      }
    default:
      return state;
  }
}
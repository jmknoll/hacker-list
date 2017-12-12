import request from 'superagent';

import {
  FETCH_TOP_STORY_IDS,
  FETCH_TOP_STORY_IDS_SUCCESS,
  FETCH_TOP_STORY_IDS_FAILURE,
  FETCH_TOP_STORIES,
  FETCH_TOP_STORIES_SUCCESS,
  FETCH_TOP_STORIES_FAILURE,
  API_REQUEST,
} from './actionTypes';


export function fetchTopStoryIds() {
  return dispatch => {
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(res => res.json())
    .then(body => dispatch(fetchTopStoryIdsSuccess(body)))
    .then(body => dispatch(fetchTopStories(body.data, 0, 12)))
    .catch(ex => dispatch(fetchTopStoryIdsFailure(ex)))
  }
}

function fetchTopStoryIdsSuccess(body) {
  return {
    type: FETCH_TOP_STORY_IDS_SUCCESS,
    data: body
  }
}

function fetchTopStoryIdsFailure(ex) {
  return {
    type: FETCH_TOP_STORY_IDS_FAILURE,
    data: ex
  }
}


export function fetchTopStories(storyIds, startIndex, amount) {

  return dispatch => {

    let topStories = [];

    function fetchOneAndReturn(index, i) {
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${index}.json`)
      .then(res => res.json())
      .then(body => {
        topStories.push(body);
        if (i === startIndex + amount - 1) {
          dispatch(fetchTopStoriesSuccess(topStories))
        }
      })
      .catch(ex => dispatch(fetchTopStoriesFailure(ex)))
    }

    for ( let i = startIndex; i < amount + startIndex; i ++) {
      fetchOneAndReturn(storyIds[i], i)
    }
  }
}

function fetchTopStoriesSuccess(body) {
  return {
    type: FETCH_TOP_STORIES_SUCCESS,
    data: body
  }
}

function fetchTopStoriesFailure(ex) {
  return {
    type: FETCH_TOP_STORIES_FAILURE,
    data: ex
  }
}

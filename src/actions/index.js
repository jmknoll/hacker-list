import request from 'superagent';

import {
  FETCH_TOP_STORIES,
  FETCH_TOP_STORY_IDS,
  FETCH_TOP_STORY_IDS_SUCCESS,
  FETCH_TOP_STORY_IDS_FAILURE,
  FETCH_NEXT_TOP_STORIES,
  API_REQUEST,
} from './actionTypes';


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

export function fetchTopStoryIds() {
  return dispatch => {
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(res => res.json())
    .then(body => dispatch(fetchTopStoryIdsSuccess(body)))
    .catch(ex => dispatch(fetchTopStoryIdsFailure(ex)))
  }
}


function fetchTopStoriesSuccess(body) {
  return {
    type: FETCH_TOP_STORIES_SUCCESS,
    data: body
  }
}

function fetchTopstoriesFailure(ex) {
  return {
    type: FETCH_TOP_STORIES_FAILURE,
    data: ex
  }
}

/*
this is the new way, but commenting out for now because i need to go to the airport and want this working before i leave
export function fetchTopStories() {
  return dispatch => {

  }
}
*/


/*

this is the old spaghetti-fied way of doing things
export function fetchStories(sIndex) {
  return function(dispatch) {
    request
    .get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .end( (err, res) => {
      if ( err || !res.ok ) {
        alert('there has been an error')
      } else {

        let storiesToAdd = [];

        dispatch({
          type: FETCH_TOP_STORY_IDS,
          data: res.body
        })


        function fetchStoriesById(topStoryIds, sIndex, amount) {
          for (let i = sIndex; i < sIndex + amount; i++) {
            request
            .get(`https://hacker-news.firebaseio.com/v0/item/${topStoryIds[i]}.json`)
            .end( (err, res) => {
              if (err || !res.ok ) {
                console.error('there has been an error fetching item #' + topStoryIds[i])
              } else {
                storiesToAdd.push(res.body);
                if ( i === sIndex + amount - 1) {
                  dispatch({
                    type: FETCH_TOP_STORIES,
                    data: storiesToAdd
                  })
                }
              }
            })
          }
        }
        fetchStoriesById(res.body, sIndex, 12)
      }
    })
  }
}

export function fetchNextTopStories(topStoryIds, sIndex, amount) {
  return function(dispatch) {
    if (!topStoryIds) {return}
    let storiesToAdd = [];
    for (let i = sIndex; i < sIndex + amount; i++) {
    request
    .get(`https://hacker-news.firebaseio.com/v0/item/${topStoryIds[i]}.json`)
      .end( (err, res) => {
        if (err || !res.ok ) {
          console.error('there has been an error fetching item #' + topStoryIds[i])
        } else {
          storiesToAdd.push(res.body);
          if ( i === sIndex + amount - 1) {
            dispatch({
              type: FETCH_NEXT_TOP_STORIES,
              data: storiesToAdd
            })
          }
        }
      })
    }
  }
  }

*/
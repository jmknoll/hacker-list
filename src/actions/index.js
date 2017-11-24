import request from 'superagent';

import {
  FETCH_STORIES,
  API_REQUEST
} from './actionTypes';

export function fetchStories() {
  return function(dispatch) {
    request
    .get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .end( (err, res) => {
      if ( err || !res.ok ) {
        alert('there has been an error')
      } else {
        dispatch({
          type: FETCH_STORIES,
          payload: res.body
        })
      }
    })
  }
}
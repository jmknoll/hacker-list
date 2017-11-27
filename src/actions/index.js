import request from 'superagent';

import {
  FETCH_TOP_STORIES,
  FETCH_TOP_STORY_IDS,
  FETCH_NEXT_TOP_STORIES,
  API_REQUEST
} from './actionTypes';

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
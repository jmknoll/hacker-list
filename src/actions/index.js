import request from 'superagent';

import {
  FETCH_TOP_STORIES,
  API_REQUEST
} from './actionTypes';

export function fetchStories() {
  return function(dispatch) {
    request
    .get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .end( (err, res) => {
      if ( err || !res.ok ) {
        alert('there has been an error')
      } else {

        let storiesToAdd = [];


        function fetchStoriesById(topStoryIds, sIndex, amount) {
          for (let i = 0; i < sIndex + amount; i++) {
            request
            .get(`https://hacker-news.firebaseio.com/v0/item/${topStoryIds[i]}.json`)
            .end( (err, res) => {
              if (err || !res.ok ) {
                console.error('there has been an error fetching item #' + topStoryIds[i])
              } else {
                storiesToAdd.push(res.body);
                if ( storiesToAdd.length === amount ) {
                  dispatch({
                    type: FETCH_TOP_STORIES,
                    data: storiesToAdd
                  })
                }
              }
            })
          }
        }

        fetchStoriesById(res.body, 0, 12)
      }
    })
  }
}
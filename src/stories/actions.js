import {
  FETCH_STORIES
} from './actionTypes';

import { API_REQUEST } from '../shared';

export function fetchStores() {
  return {
    type: API_REQUEST,
    actionName: FETCH_STORIES,
    requestPath: 'stories',
    endpoint: 'stories',
    requestMethod: 'GET'
  }
}
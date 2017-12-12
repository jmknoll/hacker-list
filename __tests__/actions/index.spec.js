import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions';
import * as types from '../../src/actions/actionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockIds =  [123, 456];
const mockTopStories = [{
  "by": "testuser",
  "descendants": 138,
  "id": 15904265,
  "kids": [15904565, 15904906],
  "score": 179,
  "time": 1513072653,
  "title": "Microsoft Adds an OpenSSH Client to Windows 10",
  "type": "story",
  "url": "https://www.servethehome.com/say-farewell-putty-microsoft-adds-openssh-client-windows-10/"
}]

describe('async actions for stories', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should create FETCH_TOP_IDS_SUCCESS after fetching top story ids', () => {
    fetchMock.mock('https://hacker-news.firebaseio.com/v0/topstories.json', mockIds)

    const expectedActions = [
      { type: types.FETCH_TOP_STORY_IDS_SUCCESS, data: mockIds }
    ]

    const store = mockStore({ stories: {
      topStoryIds: {}
    }})

    return store.dispatch(actions.fetchTopStoryIds()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create FETCH_TOP_STORIES_SUCCESS after fetching list of new top stories', () => {
    fetchMock.mock('https://hacker-news.firebaseio.com/v0/item/15904265.json', mockTopStories)

    const expectedActions = [
      { type: types.FETCH_TOP_STORY_IDS_SUCCESS, data: mockTopStories }
    ]

    const store = mockStore({ stories: {
      topStories: {}
    }})

    return store.dispatch(actions.fetchTopStoryIds()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
  

})


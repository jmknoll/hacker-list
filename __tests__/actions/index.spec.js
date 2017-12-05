import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions';
import * as types from '../../src/actions/actionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockResult =  [123, 456] 

describe('async actions for stories', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should create FETCH_TOP_IDS_SUCCESS after fetching top story ids', () => {
    fetchMock.mock('https://hacker-news.firebaseio.com/v0/topstories.json', mockResult)

    const expectedActions = [
      { type: types.FETCH_TOP_STORY_IDS_SUCCESS, data: mockResult }
    ]

    const store = mockStore({ stories: {
      topStoryIds: {}
    }})

    return store.dispatch(actions.fetchTopStoryIds()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

})


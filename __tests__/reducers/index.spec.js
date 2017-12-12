import reducer from '../../src/reducers'
import * as types from '../../src/actions/actionTypes';

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

describe('comments reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      "sIndex": 0,
      "topStories": [],
    })
  })

  it('handles action of type FETCH_TOP_STORY_IDS_SUCCESS', () => {
    const action = { type: types.FETCH_TOP_STORY_IDS_SUCCESS, data: [123, 456] }
    expect(reducer({}, action)).toEqual({
      topStoryIds: action.data
    })
  })

  it('handles action of type FETCH_TOP_STORIES_SUCCESS', () => {
    const action = { type: types.FETCH_TOP_STORIES_SUCCESS, data: mockTopStories }
    expect(reducer({topStories: []}, action)).toEqual({
      topStories: action.data
    })
  })
})
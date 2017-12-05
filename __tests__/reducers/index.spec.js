import reducer from '../../src/reducers'
import * as types from '../../src/actions/actionTypes';

describe('comments reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      "sIndex": 0,
      "stories": []
    })
  })

  it('handles action of type FETCH_TOP_STORY_IDS', () => {
    const action = { type: types.FETCH_TOP_STORY_IDS, data: [123, 456] }
    expect(reducer([], action)).toEqual({
      topStoryIds: action.data
    })
  })

  it('handles action of type FETCH_TOP_STORIES', () => {
    return
    const action = { type: types.FETCH_TOP_STORIES, data: ['story1', 'story2'] }
    expect(reducer([], action)).toEqual({
      stories: action.data
    })
  })
})
import * as types from '../../constants/ActionTypes';
import reducer from '../friendlist';

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      sex: 'male',
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      sex: 'male',
    },
    {
      name: 'George Washington',
      starred: false,
      sex: 'male',
    }
  ]
};

describe('Tests for Friend List Reducer', () => {
  it('it should return current state by default', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it(`should handle ${types.ADD_FRIEND} action`, () => {
    const action = {
      type: types.ADD_FRIEND,
      name: 'name',
      sex: 'sex'
    };
    const newState = { friendsById: [...initialState.friendsById, {name: 'name', sex: 'sex'}] }
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it(`should handle ${types.DELETE_FRIEND} action with existing id(index)`, () => {
    const action = {
      type: types.DELETE_FRIEND,
      id: 1,
    };
    const newState = {
      friendsById: [
        {
          name: 'Theodore Roosevelt',
          starred: true,
          sex: 'male',
        },
        {
          name: 'George Washington',
          starred: false,
          sex: 'male',
        }
      ]
    }
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it(`should handle ${types.DELETE_FRIEND} action with missing id`, () => {
    const action = {
      type: types.DELETE_FRIEND,
      id: 5,
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it(`should handle ${types.STAR_FRIEND} action with existing id(index)`, () => {
    const action = {
      type: types.STAR_FRIEND,
      id: 1,
    };
    const newState = initialState;
    newState.friendsById[1].starred = !newState.friendsById[1].starred;
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it(`should handle ${types.STAR_FRIEND} action with missing id`, () => {
    const action = {
      type: types.STAR_FRIEND,
      id: 5,
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
});
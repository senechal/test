import * as types from '../../constants/ActionTypes';
import reducer from '../friendlist';

const initialState = {
  loading: false,
  friendsById: []
};

describe('Tests for Friend List Reducer', () => {
  it('it should return current state by default', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it(`should handle ${types.DELETE_FRIEND}_PENDING`, () => {
    const action = {
      type: `${types.DELETE_FRIEND}_PENDING`
    };
    const newState = { ...initialState, loading: true }
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it(`should handle ${types.STAR_FRIEND}_PENDING`, () => {
    const action = {
      type: `${types.STAR_FRIEND}_PENDING`
    };
    const newState = { ...initialState, loading: true }
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it(`should handle ${types.ADD_FRIEND}_PENDING`, () => {
    const action = {
      type: `${types.ADD_FRIEND}_PENDING`
    };
    const newState = { ...initialState, loading: true }
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it(`should handle ${types.GET_FRIENDS}_PENDING`, () => {
    const action = {
      type: `${types.GET_FRIENDS}_PENDING`
    };
    const newState = { ...initialState, loading: true }
    expect(reducer(initialState, action)).toEqual(newState);
  });
  it(`should handle ${types.DELETE_FRIEND}_FULFILLED`, () => {
    const action = {
      type: `${types.DELETE_FRIEND}_FULFILLED`,
      payload: {
        data: 'mock',
      },
    };
    const newState = {
      loading: false,
      friendsById: 'mock',

    }
    expect(reducer({ ...initialState, loading: true}, action)).toEqual(newState);
  });
  it(`should handle ${types.STAR_FRIEND}_FULFILLED`, () => {
    const action = {
      type: `${types.STAR_FRIEND}_FULFILLED`,
      payload: {
        data: 'mock',
      },
    };
    const newState = {
      loading: false,
      friendsById: 'mock',
    }
    expect(reducer({ ...initialState, loading: true}, action)).toEqual(newState);
  });
  it(`should handle ${types.ADD_FRIEND}_FULFILLED`, () => {
    const action = {
      type: `${types.ADD_FRIEND}_FULFILLED`,
      payload: {
        data: 'mock',
      },
    };
    const newState = {
      loading: false,
      friendsById: 'mock',
    }
    expect(reducer({ ...initialState, loading: true}, action)).toEqual(newState);
  });
  it(`should handle ${types.GET_FRIENDS}_FULFILLED`, () => {
    const action = {
      type: `${types.GET_FRIENDS}_FULFILLED`,
      payload: {
        data: 'mock',
      },
    };
    const newState = {
      loading: false,
      friendsById: 'mock',
    }
    expect(reducer({ ...initialState, loading: true}, action)).toEqual(newState);
  });

});
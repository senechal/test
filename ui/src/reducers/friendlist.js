import * as types from '../constants/ActionTypes';

const initialState = {
  loading: false,
  friendsById: [],
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case `${types.DELETE_FRIEND}_PENDING`:
    case `${types.STAR_FRIEND}_PENDING`:
    case `${types.ADD_FRIEND}_PENDING`:
    case `${types.GET_FRIENDS}_PENDING`:
      return {...state, loading: true }
    case `${types.DELETE_FRIEND}_FULFILLED`:
    case `${types.STAR_FRIEND}_FULFILLED`:
    case `${types.ADD_FRIEND}_FULFILLED`:
    case `${types.GET_FRIENDS}_FULFILLED`:
      return {...state, loading: false, friendsById: action.payload.data};
    default:
      return state;
  }
}

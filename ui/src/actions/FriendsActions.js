import axios from 'axios';
import * as types from '../constants/ActionTypes';
import { friends } from '../urls';

export function getFriends() {
  return {
    type: types.GET_FRIENDS,
    payload: axios.get(friends),
  }
}

export function addFriend(name, sex) {
  return {
    type: types.ADD_FRIEND,
    payload: axios.post(friends, { name, sex, starred: false })
  }
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    payload: axios.delete(`${friends}/${id}`)
  }
 return dispatch => {
   axios.delete(`${friends}/${id}`).then(
    (payload) => {
      dispatch({
        type: types.DELETE_FRIEND,
        payload,
      })
    }
   )
 }
}

export function starFriend(id, starred) {
  return {
    type: types.STAR_FRIEND,
    payload: axios.put(`${friends}/${id}`, { starred })
  }
}

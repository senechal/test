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
  if (name && sex){
    return {
      type: types.ADD_FRIEND,
      payload: axios.post(friends, { name, sex, starred: false })
    }
  }
  return null
}

export function deleteFriend(id) {
  if (id){
    return {
      type: types.DELETE_FRIEND,
      payload: axios.delete(`${friends}/${id}`)
    }
  }
  return null;
}

export function starFriend(id, starred) {
  if(id){
    return {
      type: types.STAR_FRIEND,
      payload: axios.put(`${friends}/${id}`, { starred })
    }
  }
  return null;
}

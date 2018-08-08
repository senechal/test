import * as types from '../constants/ActionTypes';

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

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name,
            sex: action.sex,
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => index === action.id);
      if (friend){
        friend.starred = !friend.starred;
        return {
          ...state,
          friendsById: friends
        };
      }
      return state;


    default:
      return state;
  }
}

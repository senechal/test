import * as actions from '../FriendsActions';
import * as types from '../../constants/ActionTypes';

describe('Tests for Friends Actions', () => {
  describe('Testing addFriend', () => {
    it('should return action correctly', () => {
      const result = actions.addFriend('name', 'sex');
      expect(result).toEqual({
        type: types.ADD_FRIEND,
        name: 'name',
        sex: 'sex',
      })
    });
    it('should return action correctly with empty strings', () => {
      const result = actions.addFriend('', '');
      expect(result).toEqual({
        type: types.ADD_FRIEND,
        name: '',
        sex: '',
      })
    });
    it('should return action correctly with empty args', () => {
      const result = actions.addFriend();
      expect(result).toEqual({
        type: types.ADD_FRIEND,
        name: undefined,
        sex: undefined,
      })
    });
  });
  describe('Testing deleteFriend', () => {
    it('should return action correctly', () => {
      const result = actions.deleteFriend('id');
      expect(result).toEqual({
        type: types.DELETE_FRIEND,
        id: 'id',
      })
    });
    it('should return action correctly with empty strings', () => {
      const result = actions.deleteFriend('');
      expect(result).toEqual({
        type: types.DELETE_FRIEND,
        id: '',
      })
    });
    it('should return action correctly with empty args', () => {
      const result = actions.deleteFriend();
      expect(result).toEqual({
        type: types.DELETE_FRIEND,
        id: undefined,
      })
    });
  });
  describe('Testing starFriend', () => {
    it('should return action correctly', () => {
      const result = actions.starFriend('id');
      expect(result).toEqual({
        type: types.STAR_FRIEND,
        id: 'id',
      })
    });
    it('should return action correctly with empty strings', () => {
      const result = actions.starFriend('');
      expect(result).toEqual({
        type: types.STAR_FRIEND,
        id: '',
      })
    });
    it('should return action correctly with empty args', () => {
      const result = actions.starFriend();
      expect(result).toEqual({
        type: types.STAR_FRIEND,
        id: undefined,
      })
    });
  });
});
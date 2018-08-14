import sinon from 'sinon';
import axios from 'axios';
import 'babel-polyfill';
import * as actions from '../FriendsActions';
import * as types from '../../constants/ActionTypes';

describe('Tests for Friends Actions', () => {
  describe('Testing addFriend', () => {
    it('should return action correctly', async () => {
      const post = sinon.stub(axios, 'post').resolves('mock')
      const result = await actions.addFriend('name', 'sex');
      expect(result.type).toEqual(types.ADD_FRIEND)
      expect(result.payload).resolves.toEqual('mock');
      post.restore();
    });
    it('should return error correctly error ', async () => {
      const error = new Error('error');
      const post = sinon.stub(axios, 'post').rejects(error)
      const result = await actions.addFriend('name', 'sex');
      expect(result.type).toEqual(types.ADD_FRIEND)
      expect(result.payload).rejects.toEqual(error);
      post.restore();
    });
    it('should return action correctly with empty strings', () => {
      const result = actions.addFriend('', '');
      expect(result).toEqual(null);
    });
    it('should return action correctly with empty args', async () => {
      const result = actions.addFriend('', '');
      expect(result).toEqual(null);
    });
  });
  describe('Testing deleteFriend',  () => {
    it('should return action correctly', async() => {
      const del = sinon.stub(axios, 'delete').resolves('mock');
      const result = await actions.deleteFriend('id');
      expect(result.type).toEqual(types.DELETE_FRIEND)
      expect(result.payload).resolves.toEqual('mock');
      del.restore();
    });
    it('should return error correctly', async() => {
      const error = new Error('error');
      const del = sinon.stub(axios, 'delete').rejects(error);
      const result = await actions.deleteFriend('id');
      expect(result.type).toEqual(types.DELETE_FRIEND)
      expect(result.payload).rejects.toEqual(error);
      del.restore();
    });
    it('should return action correctly with empty strings', () => {
      const result = actions.deleteFriend('');
      expect(result).toEqual(null);
    });
    it('should return action correctly with empty args', () => {
      const result = actions.deleteFriend();
      expect(result).toEqual(null);
    });
  });
  describe('Testing starFriend', () => {
    it('should return action correctly', async () => {
      const put = sinon.stub(axios, 'put').resolves('mock');
      const result = await actions.starFriend('id');
      expect(result.type).toEqual(types.STAR_FRIEND)
      expect(result.payload).resolves.toEqual('mock');
      put.restore();
    });
    it('should return action correctly', async () => {
      const error = new Error('error');
      const put = sinon.stub(axios, 'put').rejects(error);
      const result = await actions.starFriend('id');
      expect(result.type).toEqual(types.STAR_FRIEND)
      expect(result.payload).rejects.toEqual(error);
      put.restore();
    });
    it('should return action correctly with empty strings', () => {
      const result = actions.starFriend('');
      expect(result).toEqual(null);
    });
    it('should return action correctly with empty args', () => {
      const result = actions.starFriend();
      expect(result).toEqual(null);
    });
  });
});
import request from 'supertest';
import sinon from 'sinon';
import 'sinon-mongoose';
import 'babel-polyfill';
import { app } from '../app';
import Friend from '../models';

describe('Testing api/ path', () => {
  it('should response the GET method', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.text)).toEqual({ message: 'It\'s alive!' });
  });
});
describe('Testing api/friends/ path', () => {
  let Mock;
  beforeEach(() => {
    Mock = sinon.mock(Friend);
  });
  afterEach(() => {
    Mock.restore();
  });
  it('should response the GET method', async () => {
    Mock.expects('find').yields(null, 'mock');
    const response = await request(app).get('/api/friends');
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.text)).toEqual('mock');
  });
  it('should response the GET method, with error', async () => {
    Mock.expects('find').yields('error');
    const response = await request(app).get('/api/friends');
    expect(response.statusCode).toBe(500);
    expect(response.text).toEqual('error');
  });
  it('should response the POST method', async () => {
    const data = { data: 'mock'}
    Mock.expects('create').yields(null, 'mock')
    Mock.expects('find').yields(null, 'mock')

    const response = await request(app).post('/api/friends');
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.text)).toEqual('mock');
  });
  it('should response the POST method with error', async () => {
    const data = { data: 'mock'}
    Mock.expects('create').yields( 'error');
    const response = await request(app).post('/api/friends');
    expect(response.statusCode).toBe(500);
    expect(response.text).toEqual('error');
  });
});

describe('Testing api/friends/:id', () => {
  const Mock = sinon.mock(Friend);
  it('should response the GET method', async () => {
    Mock.expects('findById').yields(null, 'mock');
    const response = await request(app).get('/api/friends/1');
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.text)).toEqual('mock');
  });
  it('should response the GET method with error', async () => {
    Mock.expects('findById').yields('error');
    const response = await request(app).get('/api/friends/1');
    expect(response.statusCode).toBe(404);
    expect(response.text).toEqual('error');
  });

  it('should response the PUT method', async () => {
    Mock.expects('update').withArgs({_id: '1'}).yields(null, 'mock');
    Mock.expects('find').yields(null, 'mock');
    const response = await request(app).put('/api/friends/1');
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.text)).toEqual('mock');
  });
  it('should response the PUT method with error', async () => {
    Mock.expects('update').withArgs({_id: '1'}).yields('error');
    const response = await request(app).put('/api/friends/1');
    expect(response.statusCode).toBe(500);
    expect(response.text).toEqual('error');
  });
  it('should response the DELETE method', async () => {
    Mock.expects('remove').withArgs({_id: '1'}).yields(null, 'mock');
    Mock.expects('find').yields(null, 'mock');

    const response = await request(app).delete('/api/friends/1');
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.text)).toEqual('mock');
  });
  it('should response the DELETE method with error', async () => {
    Mock.expects('remove').withArgs({_id: '1'}).yields('error');
    const response = await request(app).delete('/api/friends/1');
    expect(response.statusCode).toBe(500);
    expect(response.text).toEqual('error');
  });
});
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import FriendList from '../FriendList';


describe('Tests for FriendList', () => {
  let props;
  beforeEach(() => {
    props = {
      friends: [
        {_id: '0', name: 'mock 1', sex: 'male', starred: true},
        {_id: '1', name: 'mock 2', sex: 'female', starred: false},
        {_id: '2', name: 'mock 3', sex: 'male', starred: false},
        {_id: '3', name: 'mock 4', sex: 'female', starred: false},
      ],
      actions: {
        starFriend: sinon.spy(),
        deleteFriend: sinon.spy(),
      },
      pageSize: 2,
    }
  });
  configure({ adapter: new Adapter() });
  it('should render without crashing', () => {
    const wrapper = shallow(<FriendList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should change "page" state when click on the pagination page', () => {
    const wrapper = shallow(<FriendList {...props}/>);
    const paginationPages = wrapper.find('li');
    paginationPages.at(1).simulate('click')
    expect(wrapper.state('page')).toBe(1);
  });
  it('should do nothing when click on current page', () => {
    const wrapper = shallow(<FriendList {...props}/>);
    const paginationPages = wrapper.find('li');
    paginationPages.at(0).simulate('click')
    expect(wrapper.state('page')).toBe(0);
  });
});
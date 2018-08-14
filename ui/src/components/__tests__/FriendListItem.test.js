import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import FriendListItem from '../FriendListItem';


describe('Tests for FriendListItem', () => {
  let props;
  beforeEach(() => {
    props = {
      id: '0',
      name: 'mock',
      starred: true,
      sex: 'male',
      starFriend: sinon.spy(),
      deleteFriend:sinon.spy(),
    }
  });
  configure({ adapter: new Adapter() });
  it('should render without crashing', () => {
    const wrapper = shallow(<FriendListItem {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render without crashing starred', () => {
    props.starred = true;
    const wrapper = shallow(<FriendListItem {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render without crashing female', () => {
    props.sex = 'female';
    const wrapper = shallow(<FriendListItem {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call starFriend on button click', () => {
    const wrapper = shallow(<FriendListItem {...props}/>);
    const buttons = wrapper.find('button');
    buttons.at(0).simulate('click')
    expect(props.starFriend.called).toBeTruthy();
    expect(props.starFriend.calledWith('0', false)).toBeTruthy();
  });
  it('should call deleteFriend on button click', () => {
    const wrapper = shallow(<FriendListItem {...props}/>);
    const buttons = wrapper.find('button');
    buttons.at(1).simulate('click')
    expect(props.deleteFriend.called).toBeTruthy();
    expect(props.deleteFriend.calledWith('0')).toBeTruthy();
  });
});
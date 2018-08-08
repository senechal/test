import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import AddFriendInput from '../AddFriendInput';


describe('Tests for AddFriendInput', () => {
  let props;
  beforeEach(() => {
    props = {
      addFriend: sinon.spy(),
    }
  });
  configure({ adapter: new Adapter() });
  it('should render without crashing', () => {
    const wrapper = shallow(<AddFriendInput {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should change "name" state when input changes', () => {
    const wrapper = shallow(<AddFriendInput {...props}/>);
    const input = wrapper.find('#friend_name');
    input.simulate('change', { target: {value: 'mock'}});
    expect(wrapper.state('name')).toEqual('mock');
  });
  it('should change "sex" state when radio for male changes', () => {
    const wrapper = shallow(<AddFriendInput {...props}/>);
    const radio = wrapper.find('#friend_sex_male');
    radio.simulate('change', { target: {value: 'male'}});
    expect(wrapper.state('sex')).toEqual('male');
  });
  it('should change "sex" state when radio for female changes', () => {
    const wrapper = shallow(<AddFriendInput {...props}/>);
    const radio = wrapper.find('#friend_sex_female');
    radio.simulate('change', { target: {value: 'female'}});
    expect(wrapper.state('sex')).toEqual('female');
  });
  it('should change "error" state when a submition try is made without a sex selected', () => {
    const wrapper = shallow(<AddFriendInput {...props}/>);
    const input = wrapper.find('#friend_name');
    input.simulate('keydown', { which: 13});
    expect(wrapper.state('error')).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should call addFriend with a sucessful submition', () => {
    const wrapper = shallow(<AddFriendInput {...props}/>);
    wrapper.setState({name: 'mock', sex: 'male'});
    const input = wrapper.find('#friend_name');
    input.simulate('keydown', { which: 13});
    expect(props.addFriend.called).toBeTruthy();
    expect(props.addFriend.calledWith('mock', 'male')).toBeTruthy();
  });
});
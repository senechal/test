import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    const {name, sex, error } = this.state;
    return (
      <div className={classnames('form-group', styles.inputBlock, { 'has-error': error})}>
        <input
          type="text"
          autoFocus="true"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={name}
          onChange={this.handleNameChange}
          onKeyDown={this.handleSubmit} />
        <div className={styles.sexSelection}>
          <div className="radio-inline">
            <label>
              <input
                type="radio"
                name="sexRadios"
                value="male"
                onChange={this.handleSexChange}
                onKeyDown={this.handleSubmit}
                checked={sex==='male'}
              />
              Male
            </label>
          </div>
          <div className="radio-inline">
            <label>
              <input
              type="radio"
              name="sexRadios"
              value="female"
              onChange={this.handleSexChange}
              onKeyDown={this.handleSubmit}
              checked={sex==='female'}
            />
              Female
            </label>
          </div>
          {
            error
              ? <span id="helpBlock2" className="help-block">Must select the sex of your friend.</span>
              : null
          }

        </div>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      sex: this.props.sex || '',
      error: false,
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }
  handleSexChange = (e) => {
    this.setState({ sex: e.target.value });
  }

  handleSubmit = (e) => {
    const {name, sex} = this.state;
    if (e.which === 13) {
      if(sex.length === 0){
        this.setState({error: true});
      } else {
        this.props.addFriend(name.trim(), sex.trim());
        this.setState({ name: '', sex: '', error: false});
      }

    }
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';


class FriendList extends Component {
  state = {
    page: 0,
  }
  handlePageChange = (page) => {
    this.setState((state => {
      return page !== state.page ? {page} : {}
    }))
  }
  render () {
    const { friends, pageSize } = this.props;
    const { page } = this.state;
    const pages = [...Array(Math.ceil(friends.length / pageSize )).keys()].map((value, index) => (
      <li
        onClick={() => {this.handlePageChange(value)}}
        key={value}
        className={[styles.pageNumber, index === page ? styles.currentPage : ''].join(' ')}>
          {value+1}
        </li>
    ))

    return (
      <Fragment>
      <ul className={styles.friendList}>
        {
          friends.slice(page, pageSize).map((friend, index) => {
            return (
              <FriendListItem
                key={index}
                id={index}
                name={friend.name}
                starred={friend.starred}
                {...this.props.actions} />
            );
          })
        }
      </ul>
      <ul className={styles.pageList}>
        {pages}
      </ul>
      </Fragment>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  pageSize: PropTypes.number,
};

FriendList.defaultProps = {
  pageSize: 2,
}

export default FriendList;

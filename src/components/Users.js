import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username} from {user.hometown}!</li>);

    return (
      <div>
        <p>{this.props.userCount} Users!</p>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length
  }
  
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);

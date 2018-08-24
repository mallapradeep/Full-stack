import React, { Component } from 'react';
import axios from 'axios';
import { updateUser } from './../../ducks/users';
import { connect } from 'react-redux';



 class Private extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            user: {}
        }
    }

    async componentDidMount(){
        let userData = await axios.get('/api/user-data');
        this.props.updateUser(userData.data)
        // let res = await axios.get('/api/user-data');
        // this.props.updateUser(res.data)
    }

  render() {
      console.log(this.props)
      let { user } = this.props;
    return (
      <div>
        <h1>Account Details</h1>
        <hr/><hr/><hr/>
        {
            //if user.user_name is truthy then someone is logged in
            //logged in user: {user_name: 'joe', email: 'vsdv' etc..}
            //no log in user: {}
            user.user_name ? (
                <div>
                    <p>Account Holder: {user.user_name}</p>
                    <p>Email: {user.email}</p>
                    <p>Account ID: {user.auth_id}</p>
                    <p>Balance: $1000.00</p>
                    <img src={user.picture} alt="" />
                </div>
            )
            : (<p>Please Log In</p>)
        }
            <a href='http://localhost:3005/auth/logout'>
                <button>Logout</button>
            </a>
      </div>
    )
  }
}
//it is mapping redux state to props
//
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
//it is dumpin all d state to props
//this.props = Object.assign(this.props, {user: state.user});
//takes {updateUser n assign it to this.props}
export default connect(mapStateToProps, {updateUser})(Private);
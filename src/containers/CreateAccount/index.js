import React, { Component, PropTypes } from 'react';
import * as constants from './constants';
import { Field, reduxForm } from 'redux-form';
import update from 'react-addons-update';
import ExistingUser from './../ExistingUser/existingUser';
import { bindActionCreators } from 'redux';
import NewUser from '../NewUser/newUser';
import * as Actions from './actions';
import { connect } from 'react-redux';
import utilities from '../../utils/utilities.js';
import { browserHistory } from 'react-router';
import CreateAccountcss from './createAccount.scss';

//Class used for new user register or existing user login
class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExsitingUser: true
    };
    this.handleChange = this.handleChange.bind(this);
    //mocking the backend behavior so as to treat it as fresh user
    localStorage.setItem('isUserVerified', 'false');
  }

  handleChange(event) {
    this.setState({ isExsitingUser: JSON.parse(event.target.value) });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.newUserInfo !== this.props.newUserInfo) {
        browserHistory.push('/personalInfo');
    }
    if (prevProps.isUserAuthenticated !== this.props.isUserAuthenticated) {
      // for mocking the behavior and setting the user authenticated as true
      localStorage.setItem('isUserVerified', 'true');
      browserHistory.push('/personalInfo');

    }
  }

  render() {
    const { handleSubmit, pristine, submitting, error } = this.props;
    return (
      <div className="container-fluid">
        <div className="signup-wrapper">
          <h1 className="heading1 gm-align_left">Lets open an account together</h1>
          <h4 className="heading4 gm-align_left">It will only take a few minutes</h4>
          <hr />
          <p className="textn gm-align_left">All fields are required unless stated otherwise*</p>
          <h3 className="heading3 gm-align_left">Are you already a Goldman Sachs customer?</h3>
          <div className="toggleBtn">
            <input type="radio" id="existingUser" value="true" name="userType" checked={this.state.isExsitingUser} onChange={this.handleChange} /><label htmlFor="existingUser" >Yes</label>
            <input type="radio" value="false" id="newUser" name="userType" checked={!this.state.isExsitingUser} onChange={this.handleChange} /><label htmlFor="newUser">No</label>
          </div>
        </div>
        <hr />
        {/*deciding the component on the basis of user state*/}
        {this.state.isExsitingUser && <ExistingUser authenticateUser={this.props.authenticateUser} />}
        {!this.state.isExsitingUser && <NewUser saveNewUser={this.props.saveNewUser} />}
      </div>
    );
  }
}
CreateAccount.propTypes = {
  isUserAuthenticated: React.PropTypes.bool,
  newUserInfo: React.PropTypes.object
};

const mapStateToProps = (state) => {
  console.log(state);
  return { newUserInfo: state.userInfo, isUserAuthenticated: state.authenticatedUser }
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

CreateAccount = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount);
export default CreateAccount;

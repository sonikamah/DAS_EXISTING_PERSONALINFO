import React, { Component, PropTypes } from 'react';
import * as constants from '../CreateAccount/constants';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import update from 'react-addons-update';
import { browserHistory } from 'react-router';
import * as Actions from '../CreateAccount/actions';
import { bindActionCreators } from 'redux';
import validate from './validate'

// Todo: Moved the render field to reduc compoennts, need to use it from there
const renderField = ({ input, label, className, type, meta: {touched, error}}) => (
  <div className="field">
    <label className="custom-label">{label}</label>
    <input {...input} className={className} placeholder={label} type={type} />
    {touched && error && <div className="error-message">{error} </div>}
  </div>
)

//For existing user to login
class ExistingUserLogin extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //authentication call is being made on submit button
  handleSubmit(values) {
    this.props.authenticateUser(values);
    console.log("login values", values);
  }

  render() {
    const { handleSubmit, pristine, submitting, error } = this.props;
    return (
      <div className="signup-spacing">
        <form onSubmit={handleSubmit(this.handleSubmit)} autoComplete="off">
          <h2 className="heading2 gm-align_left">Please login</h2>
          <Field
            name="userName"
            component={renderField}
            className="custom-input"
            type="text"
            label="User Name">
          </Field>
          <Field
            name="password"
            component={renderField}
            className="custom-input"
            type="password"
            label="Password">
          </Field>
          <br></br>
          <button type="submit" disabled={(pristine || submitting || error)} value="Submit"
            className="custom-button">Get Started</button>
        </form>
      </div>
    );
  }
}

ExistingUserLogin = reduxForm({
  form: 'login-form',
  validate
})(ExistingUserLogin);

export default ExistingUserLogin;

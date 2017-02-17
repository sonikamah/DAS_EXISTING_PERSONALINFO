import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as constants from '../CreateAccount/constants';
import { Field, reduxForm } from 'redux-form';
import update from 'react-addons-update';
import { browserHistory } from 'react-router';
import * as Actions from '../CreateAccount/actions';
import { bindActionCreators } from 'redux';
import validate from './validate';

// Todo: Moved the render field to reduc compoennts, need to use it from there
const renderField = ({ input, label, className, type, meta: {touched, error}}) => (
  <div className="field">
    <label className="custom-label">{label}</label>
    <input {...input} className={className} placeholder={label} type={type} />
    {touched && error && <div className="error-message">{error} </div>}
  </div>
)

//Registeration page for new user
class NewUserRegistration extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  // on save we are updating the reducer with mock api response
  handleSubmit(values) {
    this.props.saveNewUser(values);
    console.log("register values", values);
  }

  render() {
    const { handleSubmit, pristine, submitting, error } = this.props;
    return (
      <div className="register-wrapper">
        <form onSubmit={handleSubmit(this.handleSubmit)} autoComplete="off">
          <h2 className="heading2 gm-align_left">Please enter your name and email address</h2>
          <Field
            name="firstName"
            component={renderField}
            className="custom-input"
            type="text"
            label="First Name">
          </Field>
          <Field
            name="middleName"
            component={renderField}
            className="custom-input"
            label="Middle Name"
            type="text">
          </Field>
          <Field
            name="lastName"
            component={renderField}
            className="custom-input"
            label="Last Name"
            type="text">
          </Field>
          <Field
            name="email"
            component={renderField}
            className="custom-input"
            label="Email"
            type="email">
          </Field>
          <br></br>
          <button type="submit" disabled={(pristine || submitting || error)} value="Submit"
            className="custom-button">Get Started</button>
        </form>
      </div>
    );
  }
}

NewUserRegistration = reduxForm({
  form: 'register-form',
  validate: validate
})(NewUserRegistration);

export default NewUserRegistration;

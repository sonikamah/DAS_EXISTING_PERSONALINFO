import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import * as constants from '../constants';
import { Field, reduxForm } from 'redux-form';
import update from 'react-addons-update';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import validate from './validate'
import register from './register.scss'


const renderField = ({ input, label, className, type, meta: {touched, error}}) => (
  <div className="field">
    <label className="form-label">{label}</label>
    <input {...input} className={className} placeholder={label} type={type} />
    {touched && error && <div className="error-message">{error} </div>}
  </div>
)
class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(values) {
    this.props.saveNewUser(values);
  }

  render() {
    const { handleSubmit, pristine, submitting, error } = this.props;
    return (
      <div className="register-wrapper">
        <div className="ccol-md-12">
          <form onSubmit={handleSubmit(this.handleSubmit)}>
            <h2>Please enter your name and email address</h2>
            <Field
              name="firstName"
              component={renderField}
              className="form-control input-sm chat-input"
              label="First Name">
            </Field>
            <Field
              name="middleName"
              component={renderField}
              className="form-control input-sm chat-input"
              label="middleName"
              type="text">
            </Field>
            <Field
              name="lastName"
              component={renderField}
              className="form-control input-sm chat-input"
              label="LastName"
              type="text">
            </Field>
            <Field
              name="email"
              component={renderField}
              className="form-control input-sm chat-input"
              label="Email"
              type="email">
            </Field>
            <br></br>
            <div className="wrapper">
              <span className="group-btn">
                <button type="submit" disabled={(pristine || submitting || error)} value="Submit"
                  className="btn-lg btn-primary">Register</button>
                <i className="fa fa-sign-in"></i>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Register = reduxForm({
  form: 'register-form',
  validate:validate
})(Register);


function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

Register = connect(
  null,
  mapDispatchToProps
)(Register);
export default Register;

import React, { Component, PropTypes } from 'react';
import * as constants from '../constants';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import update from 'react-addons-update';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import validate from './validate'
import login from './login.scss'

const renderField = ({ input, label, className, type, meta: {touched, error}}) => (
  <div className="field">
    <label className="form-label">{label}</label>
    <input {...input} className={className} placeholder={label} type={type} />
    {touched && error && <div className="error-message">{error} </div>}
  </div>
)
class LoginPersonal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    this.props.authenticateUser();
  }

  render() {
    const { handleSubmit, pristine, submitting, error } = this.props;
    return (
      <div className="signup-spacing">
          <form onSubmit={handleSubmit(this.handleSubmit)}>
            <h4>{constants.HEADING}</h4>
            <h2>Please login</h2>
            <Field
              name="userName"
              component={renderField}
              className="form-control input-sm"
              label="User Name">
            </Field>
            <Field
              name="password"
              component={renderField}
              className="form-control input-sm chat-input"
              label="Password">
            </Field>
            <br></br>
            <div className="wrapper">
              <span className="group-btn">
                <button type="submit" disabled={(pristine || submitting || error)} value="Submit"
                  className="btn-lg btn-primary">Login </button>
                <i className="fa fa-sign-in"></i>
              </span>
            </div>
          </form>
        </div>
    );
  }
}

LoginPersonal = reduxForm({
  form: 'login-form',
  validate
})(LoginPersonal);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

LoginPersonal = connect(
  null,
  mapDispatchToProps
)(LoginPersonal);
export default LoginPersonal;

import React, { Component, PropTypes } from 'react';
import * as constants from './constants';
import { Field, reduxForm } from 'redux-form';
import update from 'react-addons-update';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';

const renderField = ({ input, label, className, type, meta: {touched, error}}) => (
  <div>
    <label className="form-label">{label}</label>
    <input {...input} className={className} placeholder={label} type={type} />
    {touched && error && <div className="error-message">{error} </div>}
  </div>
)
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: {
        username: '',
        password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(values) {
    var updatedErrors = update(this.state, {
      error: {
        username: { $set: values.username ? '' : constants.ERROR_MSG.username },
        password: { $set: values.password ? '' : constants.ERROR_MSG.password }
      }
    })
    this.setState(updatedErrors);

    if (values.username && values.password) {
      this.props.authenticate({
        username: values.username,
        password: values.password
      });
    }
  }

  render() {
    const { handleSubmit, pristine, submitting, error } = this.props;
    return (
      <div className="login-container">
        <div className="loginRow-spacing row">
          <div className="col-md-offset-8 col-md-3">
            <form onSubmit={handleSubmit(this.handleSubmit)}>
              <Jumbotron className="form-login">
                <h4>{constants.HEADING}</h4>
                <Field
                  name="username"
                  component={renderField}
                  className="form-control input-sm chat-input"
                  label="UserName">
                </Field>
                <br></br>
                <Field
                  name="password"
                  component={renderField}
                  className="form-control input-sm chat-input"
                  label="Password"
                  type="Password">
                </Field>
                <br></br>
                <div className="wrapper">
                  <span className="group-btn">
                    <Button type="submit" disabled={(pristine || submitting || error)} value="Submit"
                      className="btn-lg btn-primary">{constants.LOGIN} </Button>
                    <i className="fa fa-sign-in"></i>
                  </span>
                </div>
              </Jumbotron>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login = reduxForm({
  form: 'login-form',
  validate: (values) => {
    const error = {}
    if (!values.username)
      error.username = "Please enter username";
    if (!values.password)
      error.password = "Please enter password"
    return error;
  }
})(Login);

export default Login;

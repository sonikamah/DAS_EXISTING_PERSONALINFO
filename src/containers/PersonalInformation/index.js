
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory, withRouter } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import update from 'react-addons-update';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';
import validate from './validate';
import * as Actions from './actions';
import CountryInfo from './countryInfo/countryInfo';
import renderField from '../../components/ReduxComponents/renderField';
import renderSelect from '../../components/ReduxComponents/renderSelect';
import { formValueSelector } from 'redux-form';
import monthOptions from '../../helpers/months.js'


class PersonalInformation extends Component {
  constructor(props) {
    super(props);
    this.userVerificationStatus = false;
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      isUSCitizen: true,
      isMailingAddressSame: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: JSON.parse(event.target.value) });
  }

  determineUserVerificationStatus() {
    //maintaining user verification status
    this.userVerificationStatus = JSON.parse(localStorage.getItem('isUserVerified'));
  }

  //attaching handlers
  attachHandlers() {
    //trigger focus to next element
    window.$('body').on('keypress', 'input[name=ssnFirst]', (event) => {
      if (event.target.value.length >= 3) {
        window.$('input[name=ssnSecond]').focus()
      }
    })
    //trigger focus to next element
    window.$('body').on('keypress', 'input[name=ssnSecond]', (event) => {
      if (event.target.value.length >= 2) {
        window.$('input[name=ssnThird]').focus()
      }
    })
    window.$('body').on('keypress', 'input[name=ssnThird]', (event) => {
      if (event.target.value.length >= 4) {
        window.$('input[name=ssnThird]').blur()
      }
    })
  }

  //take user to employer page when user is verified
  componentDidUpdate(prevProps) {
    if (prevProps.isVerIdVerified !== this.props.isVerIdVerified && this.props.isVerIdVerified === true) {
      //to store the user state. would ideally be maintained at backend.
      localStorage.setItem('isUserVerified', 'true');
      //take him to next page
      browserHistory.push('/employer')
    }
  }

  handleSubmit(values) {
    this.props.verifyWithVerId(values);
  }
  componentDidMount() {
    this.determineUserVerificationStatus();
    this.attachHandlers();
    //if user is not verified then just fetch the initial data
    if (this.userVerificationStatus) {
      this.props.getVerifiedUserData();
    }
  }
  render() {
    var userVerificationStatus = this.userVerificationStatus;
    const { handleSubmit, pristine, submitting, error } = this.props;
    return (
      <div className="container-fluid">
        <h1 className="heading1 gm-align_left">{"We'll start with some questions about you."}</h1>
        <h4 className="heading4 gm-align_left">{"Before opening your account, federal law requires that we ask for certain information in order to verify your identity."}</h4>
        <hr />
        <p className="textn gm-align_left">All fields required unless otherwise noted.</p>
        <h2 className="heading2 gm-align_left">Personal Information</h2>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <label className="custom-label">Your Name</label>
          <Field
            name="firstName"
            component={renderField}
            className="multiInputContainer"
            type="text"
            label="First Name"
            subLevelContaner="true"
            isReadOnly={userVerificationStatus}>
          </Field>
          <Field
            name="lastName"
            component={renderField}
            className="multiInputContainer"
            type="text"
            label="Last Name"
            subLevelContaner="true"
            isReadOnly={userVerificationStatus}>
          </Field>
          <Field
            name="middleName"
            component={renderField}
            className="multiInputContainer"
            type="text"
            label="Middle Name"
            subLevelContaner="true"
            isReadOnly={userVerificationStatus}>
          </Field>
          <div>
            <label className="custom-label">Social Security Number</label>
            <div className="multiInputContainer bm-type_number">
              <Field
                name="ssnFirst"
                component={renderField}
                className="inline"
                customInputClassName="bm-width_small"
                type="number"
                min={100}
                max={999}
                inputMode="numeric"
                pattern="[0-9]*"
                subLevelContaner="true"
                isReadOnly={userVerificationStatus}>
              </Field>
              <span className="separator">-</span>
              <Field
                name="ssnSecond"
                component={renderField}
                className="inline"
                customInputClassName="bm-width_small"
                type="number"
                min={100}
                max={999}
                inputMode="numeric"
                pattern="[0-9]*"
                subLevelContaner="true"
                isReadOnly={userVerificationStatus}>
              </Field>
              <span className="separator">-</span>
              <Field
                name="ssnThird"
                component={renderField}
                className="inline"
                customInputClassName="bm-width_small"
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                min={1000}
                max={9999}
                subLevelContaner="true"
                isReadOnly={userVerificationStatus}>
              </Field>
            </div>
          </div>
          <div className="gm-align_left">
            <label className="custom-label">Date of Birth</label>
            <div className="date-container gm-display_inlineBlock">
              <Field
                name="month"
                entity="month"
                className="mandatory-fields gm-display_inlineBlock"
                component={renderSelect}
                list={monthOptions()}>
              </Field>
              <span className="separator">/</span>
              <Field
                name="day"
                component={renderField}
                className="inline"
                customInputClassName="bm-width_small"
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                min={1000}
                max={9999}
                subLevelContaner="true">
              </Field>
              <span className="separator">/</span>
              <span className="uneditableText">1981</span>
              <a href="javascript:void(0)">Update year of birth?</a>
            </div>
          </div>
          <div className="gm-align_left">
            <label className="custom-label">Are you a U.S. citizen? </label>
            <div className="toggleBtn gm-display_inlineBlock">
              <Field name="isUSCitizen" id="citizen" component="input" type="radio" value="true" /><label htmlFor="citizen" >Yes</label>
              <Field name="isUSCitizen" id="noncitizen" component="input" type="radio" value="false" /><label htmlFor="noncitizen">No</label>
            </div>
          </div>
          {!this.props.isUSCitizen && <CountryInfo />}
          <div>
            <label className="custom-label">Phone Number</label>
            <div className="multiInputContainer bm-type_number">
              <Field
                name="phoneFirst"
                component={renderField}
                className="inline"
                customInputClassName="bm-width_small"
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                subLevelContaner="true">
              </Field>
              <span className="separator">-</span>
              <Field
                name="phoneSecond"
                component={renderField}
                className="inline"
                customInputClassName="bm-width_small"
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                subLevelContaner="true">
              </Field>
              <span className="separator">-</span>
              <Field
                name="phoneThird"
                component={renderField}
                className="inline"
                customInputClassName="bm-width_small"
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                subLevelContaner="true">
              </Field>
            </div>
          </div>
          <Field
            name="email"
            component={renderField}
            className="multiInputContainer bm-type_singleInput"
            type="email"
            label="Email">
          </Field>
          <button type="submit" disabled={(pristine || submitting || error)} value="Submit"
            className="custom-button">Next</button>
        </form>
      </div>
    );
  }
}
PersonalInformation.propTypes = {
  // property for form to initialise values
  initialValues: React.PropTypes.object,
  // property for form to initialise values
  enableReinitialize: React.PropTypes.bool,
  //to keep the user verification status with us
  isVerIdVerified: React.PropTypes.bool,
  //to maintain user country
  isUSCitizen: React.PropTypes.bool
};

PersonalInformation = reduxForm({
  form: 'personalInfo',
  validate: validate
})(PersonalInformation);

//to access the form values.
const selector = formValueSelector('personalInfo');

const mapStateToProps = (state, ownProps) => {

  //to fetch current citizen type on the basis of user action 
  var currentCitizenStatus = selector({ form: state.form }, 'isUSCitizen') || true;
  //hack to mock cookie behavior
  if (JSON.parse(localStorage.getItem('isUserVerified'))) {
    return { initialValues: state.getVerifiedUserData, enableReinitialize: true, isVerIdVerified: state.isVerIdVerified, isUSCitizen: JSON.parse(currentCitizenStatus) };
  }
  return { initialValues: Object.assign({}, state.userInfo, { isUSCitizen: "true" }), enableReinitialize: true, isVerIdVerified: state.isVerIdVerified, isUSCitizen: JSON.parse(currentCitizenStatus) };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInformation);
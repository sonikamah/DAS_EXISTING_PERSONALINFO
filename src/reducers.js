/**
 * Created by muduna on 1/10/2017.
 */

import { combineReducers } from 'redux';
import welcomeReducer from './containers/Welcome/reducer';
import * as questionsReducer  from './containers/Questionnaire/reducer';
import proposalReducer  from './containers/Proposal/reducer';
import * as signUpReducer  from './containers/CreateAccount/reducer';
import * as personalInfoReducer  from './containers/PersonalInformation/reducer';
import * as reviewPageReducer  from './containers/ReviewPage/reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  user: welcomeReducer,
  questions: questionsReducer.questionnaireReducer,
  userResponse: questionsReducer.userResponseReducer,
  proposal: proposalReducer,
  userInfo: signUpReducer.userInfoReducer,
  authenticatedUser:signUpReducer.authenticateUser,
  initialData:personalInfoReducer.userResponseReducer,
  isVerIdVerified:personalInfoReducer.verifyWithVerId,
  getVerifiedUserData:personalInfoReducer.getVerifiedUserData,
  verIdUserData: reviewPageReducer.verIdUserData,
  form: formReducer
})
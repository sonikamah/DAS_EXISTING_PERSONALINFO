/**
 * Created by muduna on 1/10/2017.
 */
import { fork } from 'redux-saga/effects';

import authWatcher from './containers/Welcome/saga';
import getQuestionsWatcher from './containers/Questionnaire/saga';
import getProposalWatcher from './containers/Proposal/saga';
import getUserInfoWatcher from './containers/CreateAccount/saga';
import getInitialDataWatcher from './containers/PersonalInformation/saga';
import getEmployerPageWatcher from './containers/EmployerPage/saga';
import getReviewPageWatcher from './containers/ReviewPage/saga';

export default function* startForman() {
  yield fork(authWatcher);
  yield fork(getQuestionsWatcher);
  yield fork(getProposalWatcher);
  yield fork(getUserInfoWatcher);
  yield fork(getInitialDataWatcher);
  yield fork(getEmployerPageWatcher);
  yield fork(getReviewPageWatcher);
}
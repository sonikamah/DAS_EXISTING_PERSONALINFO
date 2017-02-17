import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
//import routes from './routes';
import configureStore from './store';
import initialState from './config';
import { Router, browserHistory } from 'react-router';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Welcome from './containers/Welcome';
import GetStarted from './containers/GetStarted';
import Questionnaire from './containers/Questionnaire';
import Proposal from './containers/Proposal';
import NotFound from './containers/NotFound';
import CreateAccount from './containers/CreateAccount';
import PersonalInfo from './containers/PersonalInformation';
import EmployerPage from './containers/EmployerPage';
import ReviewPage from './containers/ReviewPage';

const store = configureStore(initialState);

function requireAuth(nextState, replace) {
  /* if(!store.getState().user.isAuthenticated){
     //pass on info to where the user was going to in a new prop nextPathname
     replace({pathname:'/', state:{nextPathname:nextState.location.pathname}})
   }*/
  return true;
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App} >
        <IndexRoute component={Welcome} />
        <Route path="getStarted" component={GetStarted} onEnter={requireAuth} >
          <Route path="(:id)" component={NotFound} >
            <Route path=":detail" component={Proposal}>
            </Route>
          </Route>
        </Route>
        <Route path="questionnaire(/:id)" component={Questionnaire} onEnter={requireAuth} />
        <Route path="proposal" component={Proposal} onEnter={requireAuth} />
        <Route path="createAccount" component={CreateAccount} />
        <Route path="personalInfo" component={PersonalInfo} />
        <Route path="employer" component={EmployerPage} />
        <Route path="review" component={ReviewPage} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

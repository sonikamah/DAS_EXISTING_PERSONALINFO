
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory, withRouter } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import update from 'react-addons-update';

import * as Actions from './actions';

class EmployerPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.isVerIdVerified !== this.props.isVerIdVerified && !this.props.isVerIdVerified) {
            browserHistory.push('/personalInfo');
        }
    }
    render() {
        return (<div>
            <button onClick={() => {
                browserHistory.push('/reviewPage')
            }}>Next</button>
            <button onClick={() => {
                this.props.expireVerifyWithVerId()
            }}
            >Prev</button>
        </div>)
    }
}
EmployerPage.propTypes = {
};

// Subscribe component to redux store and merge the state into component's props
const mapStateToProps = (state, ownProps) => ({
    isVerIdVerified: state.isVerIdVerified
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployerPage);
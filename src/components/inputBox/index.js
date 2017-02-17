
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory, withRouter } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import update from 'react-addons-update';

import * as Actions from './actions';

class InputBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    }
}
inputBox.propTypes = {
};

// Subscribe component to redux store and merge the state into component's props
const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps= (dispatch)=> {
    return bindActionCreators(Actions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions);